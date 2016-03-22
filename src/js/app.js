import React from 'react';
import ReactDOM from 'react-dom';
import pify from 'pify';
import 'babel-polyfill';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import ImageAnswer from './image-answer.js';
import Header from './header.js';
import '../scss/styles.scss';

// const signInWithGoogle = () => {
//   const rootRef = new Firebase("https://learning-prototype.firebaseio.com");
//   rootRef.authWithOAuthPopup("google", function(error, authData) {
//     if (error) {
//       console.log("Login Failed!", error);
//     } else {
//       console.log("Authenticated successfully with payload:", authData);
//     }
//   });
// }

const Application = React.createClass({
  componentWillMount: function () {
    
  },
  getInitialState: function () {
    return {};
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} />
        <main id="main">
        	<div className="row">
            <div className="col-xs-12">
              <ImageAnswer identifier="" />
            </div>
          </div>
        </main>
      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('application'));
