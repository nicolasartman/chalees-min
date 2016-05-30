import React from 'react';
import { Link } from 'react-router';

import * as auth from './auth.js';

import logo from '../images/chalees-min-logo.png';
import logoHighDpi from '../images/chalees-min-logo@2x.png';

const Header = React.createClass({
  showFacebookLoginPrompt: () => auth.showFacebookLoginPrompt(),
  showGoogleLoginPrompt: () => auth.showGoogleLoginPrompt(),
  getInitialState: () => ({}),
  componentWillMount: async function () {
    const user = await auth.authorize();
    console.log('header: user', user);
    this.setState({name: user.displayName});
  },
  logOut: async function () {
    await auth.signOut();
  },
  render: function () {
    const userSection = this.state.name ? (
      <ul className="pure-menu-list">
        <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover main-nav-user-menu">
          <a className="pure-menu-link" href="#">{this.state.name}</a>
          <ul className="pure-menu-children">
            <li className="pure-menu-item">
              <a className="pure-menu-link" href="#" onClick={this.logOut}>Sign Out</a>
            </li>
          </ul>
        </li>
      </ul>
    ) : (
      <ul className="pure-menu-list main-nav-user-menu">  
        <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover">
          <a className="pure-menu-link" href="#">Sign In</a>
          <ul className="pure-menu-children">
            <li className="pure-menu-item">
              <a href="#" onClick={this.showGoogleLoginPrompt} className="pure-menu-link">
                <span>Sign In With Google</span>
              </a>
            </li>
            <li className="pure-menu-item">
              <a href="#" onClick={this.showFacebookLoginPrompt} className="pure-menu-link">
                <span>Sign In With Facebook</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );

    return (
      <header id="header" className="header">
        <div className="container">
          <div className="pure-g">
            <div className="pure-u-1">
            	<nav className="home-menu pure-menu pure-menu-horizontal main-nav">
            		<Link to="/" className="header-brand">
                  <img src={logo} srcset={logo + " 1x, " + logoHighDpi + " 2x"} role="presentation" className="header-brand-logo" />
                </Link>

                {userSection}
            	</nav>
            </div>
          </div>
        </div>
      </header>
    )
  }
})

export default Header;
