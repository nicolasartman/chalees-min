# chalees-min

Currently in private prototyping. More info coming in the future.

## Local Development

1. clone the repository
1. `npm install`
1. Set up firebase: `npm install -g firebase-tools` then `firebase login` and follow the prompts
1. Create a new firebase project at firebase.google.com
1. Enable the google auth provider for the project under the firebase console auth section (see firebase's latest docs for more info)
1. Set your local development firebase project to be the default: `firebase use <your firebase project name>`
1. Create a file in the root of your repository named `dev.config.js` with contents like this
  ```
  module.exports = {
    firebase: {
      apiKey: "fdsjoiasdfjoifasdjiopfdsajiopfdsaj",
      authDomain: "projectname.firebaseapp.com",
      databaseURL: "https://projectname.firebaseio.com",
      storageBucket: "projectname.appspot.com",
    }
  };
  ```
  
  You can grab the value from the firebase console by clicking the giant "add to web app" buttons that generate a similar snippet to the above.

1. `npm run dev` will upload the security rules to your dev instance and start a local development server