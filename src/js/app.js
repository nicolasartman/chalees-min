import React from 'react';

import some from './some-component.js';
import '../scss/styles.scss';

window.signInWithGoogle = () => {
  const rootRef = new Firebase("https://learning-prototype.firebaseio.com");
  rootRef.authWithOAuthPopup("google", function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
}