import Auth0 from 'auth0-js';
import Auth0Lock from 'auth0-lock';
import config from './config.js';

// The AWS SDK lacks browser support so this workaround just uses the prebuilt file
// that's loaded in index.html
const AWS = window.AWS;

const auth0Lock = new Auth0Lock(
  'zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9', 'learning-prototype.auth0.com');

var auth0 = new Auth0({
  domain:         config.auth0.domain,
  clientID:       config.auth0.clientID,
  // callbackURL:    'dummy'
});

// TODO: get from localStorage if possible
const hash = auth0Lock.parseHash();
let loginPromise;

if (hash) {
  if (hash.error) {
    alert('There was an error logging in ' + hash.error);
    loginPromise = Promise.reject(new Error('User is logged out'));
  } else {
    // Ensure the token is still valid
    const idToken = hash['id_token'];
    const tokenExpireTime = JSON.parse(window.atob(idToken.split('.')[1])).exp * 1000;
    if (tokenExpireTime < new Date().getTime()) {
      loginPromise = Promise.reject(new Error('JWT expired'));
    } else {
      loginPromise = Promise.resolve(idToken);
    }
  }
} else {
  loginPromise = Promise.reject(new Error('User is signed out'));
}

const userProfilePromise = loginPromise.then((idToken) => new Promise((resolve, reject) => {
  auth0Lock.getProfile(idToken, (error, profile) => {
    if (error) {reject(error);}
    else {
      console.log('successfully authed to auth0 profile')
      resolve(profile);
    }
  });
}));

const awsCredentialsPromise = loginPromise.then((idToken) => new Promise((resolve, reject) => {
  auth0.getDelegationToken({
    id_token: idToken,
    api: 'aws',
    role: config.aws.role,
    principal: config.aws.principal
  }, (error, result) => {
    if (error) {reject(error);}
    else {
      console.log('successfully authed to aws')
      resolve(result);
    }
  });
}));

const firebaseCredentialsPromise = loginPromise.then((idToken) => new Promise((resolve, reject) => {
  auth0.getDelegationToken({
    id_token: idToken,
    api: 'firebase'
  }, (error, result) => {
    if (error) {reject(error);}
    else {
      console.log('successfully authed to firebase')
      resolve(result);
    }
  })
}))

export async function fetchUserProfile() {
  return userProfilePromise;
}
export async function fetchAwsCredentials() {
  return awsCredentialsPromise.then(({Credentials}) => Credentials);
}
export async function fetchFirebaseCredentials() {
  return awsCredentialsPromise.then(({Credentials}) => Credentials);
}


let loggedIn = false;
loginPromise.then(() => loggedIn = true);

export const isLoggedIn = () => loggedIn;


export function showLoginPrompt() {
  auth0Lock.show();
}