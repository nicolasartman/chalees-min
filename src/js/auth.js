import Auth0 from 'auth0-js';
import config from './config.js';
import Firebase from 'firebase';
import localStore from 'store';
import decodeJwt from 'jwt-decode';
import { browserHistory } from 'react-router';

import heartIcon from '../images/chalees-min-logo-icon.svg';

// Minimum time to display the loading message before letting it clear.
// This ensures there isn't a flash of the loading screen and then a fade-out
// for users with very fast connections
const MINIMUM_LOADING_TIME = 1 * 1000;

const AWS = window.AWS;

var auth0 = new Auth0({
  domain:         config.auth0.domain,
  clientID:       config.auth0.clientId,
  callbackURL:    window.location.protocol + "//" + window.location.hostname +
                  (window.location.port ? ':' + window.location.port: '')
});

const firebaseRef = new Firebase('https://chalees-min.firebaseio.com');

let authorizationPromise;

async function fetchProfile(idToken) {
  return new Promise((resolve, reject) => {
    auth0.getProfile(idToken, (error, profile) => {
      if (error) {reject(error);}
      else {
        console.log('successfully authed to auth0 profile')
        resolve(profile);
      }
    });
  });
};

async function fetchAwsAuthorization(idToken) {
  return new Promise((resolve, reject) => {
    auth0.getDelegationToken({
      id_token: idToken,
      api: 'aws',
      role: config.aws.role,
      principal: config.aws.principal
    }, (error, result) => {
      if (error) {reject(error);}
      else {
        console.log('successfully authed to aws', result)
        AWS.config.credentials = new AWS.Credentials(
          result.Credentials.AccessKeyId,
          result.Credentials.SecretAccessKey,
          result.Credentials.SessionToken
        );
        AWS.config.region = 'ap-southeast-1';
        resolve(result);
      }
    });
  });
};

async function fetchFirebaseAuthorization(idToken) {
  return new Promise((resolve, reject) => {
    auth0.getDelegationToken({
      id_token: idToken,
      api: 'firebase'
    }, (error, result) => {
      if (error) {reject(error);}
      else {resolve(result.id_token);}
    })
  });
};

// Requires the JWT received from the delegation token endpoint call for firebase
async function authorizeToFirebaseDb(firebaseIdToken) {
  return new Promise((resolve, reject) => {
    
    firebaseRef.authWithCustomToken(firebaseIdToken, function (error, authData) {
      if (error) {reject(error);}
      else {
        console.log('successfully authed to firebase itself');
        resolve(authData);
      }
    });    
  });
}

function validateAuthorizations(authorizations) {
  console.log('decoded jwt', decodeJwt(authorizations.idToken));
  const expirationTime = decodeJwt(authorizations.idToken).exp * 1000;
  let result = expirationTime && new Date().getTime() < expirationTime;
  console.log('cached authorizations are ', result ? 'valid' : 'invalid');
  return result;
}

export async function authorize() {
  const cachedAuthorizations = localStore.get('authorizations');
  if (cachedAuthorizations && validateAuthorizations(cachedAuthorizations)) {
    // TODO: refresh any authorization that is close to expiring
    console.log('returning cached authorizations', cachedAuthorizations);
    return Promise.resolve(cachedAuthorizations);
  } else {
    // clear cached authorizations
    localStore.remove('authorizations');
  }
  
  let loginPromise;
  if (!authorizationPromise) {
    const hash = auth0.parseHash(window.location.hash);

    if (hash) {
      if (hash.error) {
        alert('There was an error logging in ' + hash.error);
        loginPromise = Promise.reject(new Error('User failed to log in'));
      } else {
        // Clear the hash from the url
        // window.location.hash = '';
        // Redirect the user back to the URL they were at before logging in
        browserHistory.push(hash.state);

        // Ensure the token is still valid
        const idToken = hash['id_token'];
        const tokenExpireTime = decodeJwt(idToken).exp * 1000;
        if (tokenExpireTime < new Date().getTime()) {
          loginPromise = Promise.reject(new Error('JWT expired'));
        } else {
          loginPromise = Promise.resolve(idToken);
        }
      }
    } else {
      loginPromise = Promise.reject(new Error('User is not logged in'));
    }

    authorizationPromise = Promise.all([
      loginPromise,
      loginPromise.then(fetchProfile),
      loginPromise.then(fetchAwsAuthorization),
      loginPromise.then(fetchFirebaseAuthorization).then(authorizeToFirebaseDb)
    ])
    .then(([idToken, profile, aws, firebase]) => {
      console.log('here???');
      const authorizations = {idToken, profile, aws, firebase};
      localStore.set('authorizations', authorizations);
      return authorizations;
    });
  }
  
  return authorizationPromise;
}


let isReadyPromise;
export async function whenReady() {
  // The flow is constructed so the authorization and wait promise run concurrently,
  // but the loading screen doesn't clear before the minimum load time, even if
  // the authorization is rejected immediately.
  if (!isReadyPromise) {
    const readyPromise = authorize().then(() => firebaseRef.child('.info/connected').once('value'));
    isReadyPromise = new Promise((resolve, reject) => {
      window.setTimeout(resolve, MINIMUM_LOADING_TIME);
    }).then(() => readyPromise);
  }
  return isReadyPromise;
}

export async function reauthorize() {
  authorizationPromise = null;
  return authorize();
}


const defaultLoginOptions = {
  responseType: 'token',
  scope: 'openid offline_access',
  callbackOnLocationHash: true  
};

export function showGoogleLoginPrompt() {
  auth0.login(Object.assign({}, defaultLoginOptions, {
    connection: 'google-oauth2',
    state: window.location.pathname,
  }));
}

export function showFacebookLoginPrompt() {
  auth0.login(Object.assign({}, defaultLoginOptions, {
    connection: 'facebook',
    state: window.location.pathname,
  }));
}
