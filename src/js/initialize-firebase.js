let config;

// Initialize Firebase with the appropriate database
if (__DEPLOY_TARGET__ === 'production') {
  config = {
    apiKey: "AIzaSyBwi1Se-jPT45UNXpWLUe8l5BM0BbEW7Xw",
    authDomain: "chaleesmin.school",
    databaseURL: "https://chalees-min.firebaseio.com",
    storageBucket: "chalees-min.appspot.com",
  };
} else if (__DEPLOY_TARGET__ === 'staging') {
  config = {
    apiKey: "AIzaSyBZpZUZyCoKAX7qHXu9fynINT2gbJmhuW0",
    authDomain: "chalees-staging.firebaseapp.com",
    databaseURL: "https://chalees-staging.firebaseio.com",
    storageBucket: "chalees-staging.appspot.com",
  };
} else {
  config = require('../../dev.config.js').firebase;
}
firebase.initializeApp(config);
