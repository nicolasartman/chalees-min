import Auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import config from './config.js';
import Firebase from 'firebase';
import localStore from 'store';
import decodeJwt from 'jwt-decode';
const AWS = window.AWS;

const auth0Lock = new Auth0Lock(
  'zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9', 'learning-prototype.auth0.com');

var auth0 = new Auth0({
  domain:         config.auth0.domain,
  clientID:       config.auth0.clientID,
  // callbackURL:    'dummy'
});


let authorizationPromise;

async function fetchProfile(idToken) {
  return new Promise((resolve, reject) => {
    auth0Lock.getProfile(idToken, (error, profile) => {
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
    const ref = new Firebase('https://learning-prototype.firebaseio.com');
    ref.authWithCustomToken(firebaseIdToken, function (error, authData) {
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
  return true;
}

export async function authorize() {
  const cachedAuthorizations = localStore.get('authorizations');
  if (cachedAuthorizations && validateAuthorizations(cachedAuthorizations)) {
    // TODO: refresh any authorization that is close to expiring
    console.log('returning cached authorizations', cachedAuthorizations);
    return Promise.resolve(cachedAuthorizations);
  }
  
  let loginPromise;
  if (!authorizationPromise) {
    const hash = auth0Lock.parseHash();

    if (hash) {
      if (hash.error) {
        alert('There was an error logging in ' + hash.error);
        loginPromise = Promise.reject(new Error('User failed to log in'));
      } else {
        // Clear the hash from the url
        window.location.hash = '';
        
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

export async function reauthorize() {
  authorizationPromise = null;
  return authorize();
}

export function showLoginPrompt() {
  auth0Lock.show();
}