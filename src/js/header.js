import React from 'react';
import { Link } from 'react-router';
import * as auth from './auth.js';

const Header = React.createClass({
  showLoginPrompt: function () {
    auth.showLoginPrompt();
  },
  componentWillMount: function () {
    console.log('called!');
    auth.fetchUserProfile().then(profile => {
      this.setState({name: profile.name});
    });
  },
  render: function () {
    const logoutUrl = 'https://learning-prototype.auth0.com/v2/logout?returnto=' +
      encodeURI(window.location.host + window.location.pathname);
    const userSection = this.props.loggedIn ? (
      <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover">
        <a className="pure-menu-link">{this.state.name}</a>
        <ul className="pure-menu-children">
          <li className="pure-menu-item">
            <a className="pure-menu-link" href="{logoutUrl}">Sign Out</a>
          </li>
        </ul>
      </li>
    ) : (
      <li className="pure-menu-item">      
        <a href="#" onClick={this.showLoginPrompt} className="pure-menu-link">
          <span>Sign In</span>
        </a>
      </li>
    );
    
    return (
      <header id="header" className="header">
      	<nav className="home-menu pure-menu pure-menu-horizontal main-nav">
          <ul className="pure-menu-list">
        		<Link to="/" className="pure-menu-link">Chalees Min School</Link>
          </ul>

      		<ul className="pure-menu-list pull-right">
            {userSection}
      		</ul>
      	</nav>
      </header>
    )
  }
})

export default Header;
