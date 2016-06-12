import decodeJwt from 'jwt-decode';
import { browserHistory } from 'react-router';

import heartIcon from '../images/chalees-min-logo-icon.svg';

// Minimum time to display the loading message before letting it clear.
// This ensures there isn't a flash of the loading screen and then a fade-out
// for users with very fast connections
const MINIMUM_LOADING_TIME = 1 * 1000;

const firebaseRef = firebase.database().ref();
const firebaseAuth = firebase.auth();

let authorizationPromise;

export async function authorize() {

  if (!authorizationPromise) {
    authorizationPromise = new Promise(async (resolve, reject) => {
      const {user: userFromRedirect} = await firebase.auth().getRedirectResult();
      console.log('userFromRedirect', userFromRedirect);

      if (userFromRedirect) {
        resolve(userFromRedirect);
      } else {
        // for now ignore the fact that this is evented and just get the first event
        // so we can determine if the user is authorized on load. sign in/out
        // will refresh the page so this will re-check then automatically.
        console.log('waiting on auth state change');
        const unsubscribe = firebase.auth().onAuthStateChanged(function(user) {
          console.log('auth state', user);
          unsubscribe();
          if (user) {
            resolve(user);
          } else if (user === null) {
            reject('User is signed out');
          }
        }, function onError(error) {
          alert('Error Authenticating. Please let us know about this, thank you!');
          console.log(error);
          unsubscribe();
        });
      }      
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

function signIn(provider) {
  return firebaseAuth.signInWithRedirect(provider);
}

export function showGoogleLoginPrompt() {
  return signIn(new firebase.auth.GoogleAuthProvider());
}

export function showFacebookLoginPrompt() {
  return signIn(new firebase.auth.FacebookAuthProvider());
}

export function signOut() {
  return firebaseAuth.signOut().then(function() {
    window.location.reload();
    // Sign-out successful.
  }, function(error) {
    alert('Failed to sign out. Reason: ' + error);
    // An error happened.
  });
}