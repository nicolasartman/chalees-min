"use strict";

// test

window.loginWithGoogle = function () {
  var rootRef = new Firebase("https://learning-prototype.firebaseio.com");
  rootRef.authWithOAuthPopup("google", function (error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });
};
//# sourceMappingURL=app.js.map
