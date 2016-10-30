import { Link } from 'react-router';

import * as auth from './auth.js';

import logo from '../images/chalees-min-logo.png';
import logoHighDpi from '../images/chalees-min-logo@2x.png';
import mobileMenuIcon from '../images/icons/menu-icon.svg';

const UserMenu = React.createClass({
  showFacebookLoginPrompt: () => auth.showFacebookLoginPrompt(),
  showGoogleLoginPrompt: () => auth.showGoogleLoginPrompt(),
  getInitialState: () => ({}),
  componentWillMount: async function () {
    const user = await auth.authorize();
    log('MOOOOOOOOOOOOOOOOO', user);
    if (user && user.hasOwnProperty('displayName') && !user.displayName) {
      this.setState({name: 'Account'});
    } else if (user) {
      this.setState({name: user.displayName});      
    }
  },
  logOut: function () {
    auth.signOut();
  },
  render: function () {
    const menuContents = (
      <ul className="pure-menu-children">
        <li className="pure-menu-item">
          <a className="pure-menu-link" href="#" onClick={this.logOut}>Sign Out</a>
        </li>
      </ul>
    );
    
    return (
      this.state.name ? (
        <ul className="pure-menu-list">
          <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover main-nav-user-menu hidden-xs">
            <a className="pure-menu-link" href="#">{this.state.name}</a>
            {menuContents}
          </li>
          <li className="user-menu pure-menu-item pure-menu-allow-hover main-nav-user-menu hidden-sm hidden-md hidden-lg hidden-xl">
            <a className="pure-menu-link" href="#" style={{paddingRight: 0, paddingLeft: 0}}>
              <img src={mobileMenuIcon} style={{height: '100%', padding: 12}} />
            </a>
            {menuContents}
          </li>
        </ul>
      ) : (
        <ul className="pure-menu-list main-nav-user-menu">  
          <li className="user-menu pure-menu-item pure-menu-has-children pure-menu-allow-hover">
            <a className="pure-menu-link" href="#">Sign In</a>
            <ul className="pure-menu-children">
              <li className="pure-menu-item">
                <a href="#" onClick={this.showGoogleLoginPrompt} className="pure-menu-link">
                  <span>Sign In With GMail (Google)</span>
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
      )
    );
  }
})

export default UserMenu;
