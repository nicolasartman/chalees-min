import React from 'react';
import ReactDOM from 'react-dom';
import pify from 'pify';
import 'babel-polyfill';
import * as uploader from './uploader.js';
import Auth0Lock from 'auth0-lock';
import '../scss/styles.scss';
import Dropzone from 'react-dropzone';

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

const Header = React.createClass({
  showLock: function () {
    this.props.lock.show(this.props.onAuth);
  },
  logout: function () {
    
  },
  render: function () {
    const logoutUrl = 'https://learning-prototype.auth0.com/v2/logout?returnto=' +
      encodeURI(window.location.host + window.location.pathname);
    const userSection = this.props.authProfile ? (
      <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        {this.props.authProfile && this.props.authProfile.name}
        <ul className="pure-menu-children">
          <li className="pure-menu-item">
            <a className="pure-menu-link" href="" onClick={this.logout}>Sign Out</a>
          </li>
        </ul>
      </li>
    ) : (
      <li className="pure-menu-item">      
        <a href="#" onClick={this.showLock} className="pure-menu-link">
          <span> Sign in with Google</span>
        </a>
      </li>
    );
    
    return (
      <header id="header" className="header">
      	<nav className="home-menu pure-menu pure-menu-horizontal main-nav">
      		Needs-a-name!?

      		<ul className="pure-menu-list pull-right">
            {userSection}
      		</ul>
      	</nav>
      </header>
    )
  }
})

const Application = React.createClass({
  componentWillMount: function () {
    this.lock = new Auth0Lock(
      'zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9', 'learning-prototype.auth0.com');

    const hash = this.lock.parseHash();

    if (hash) {
      if (hash.error) {
        alert('There was an error logging in ' + hash.error);
      } else {
        // TODO: why on earth doesn't this work with pify and fun.bind?
        this.lock.getProfile(hash['id_token'], (error, profile) => {
          this.setState({authProfile: profile, isLoggedIn: true});
          console.log(profile);

          uploader.getAwsToken(hash['id_token'], (error, {Credentials}) => {
            console.log('aws credentials', Credentials);
            this.setState({awsCredentials: Credentials})
          });
        });
      }
    }
  },
  getInitialState: function () {
    return {};
  },
  onDrop: function ([file]) {
    console.log(file.name);
    if (file && file.name && this.state.isLoggedIn) {
      uploader.uploadFile(this.state.authProfile.user_id, file, (error, result) => {
        console.log('uploaded file!', error, result)
      });
    }
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} />
        <main id="main">
        	<div className="row">
            <div className="col-xs-12">
              <Dropzone onDrop={this.onDrop} />
            </div>
          </div>
        </main>
      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('application'));
