import { Link } from 'react-router';

import logo from '../images/chalees-min-logo.png';
import logoHighDpi from '../images/chalees-min-logo@2x.png';
import mobileMenuIcon from '../images/icons/menu-icon.svg';
import UserMenu from './user-menu.js';

const Header = () => (
  <header id="header" className="header">
    <div className="container">
      <div className="pure-g">
        <div className="pure-u-1">
        	<nav className="home-menu pure-menu pure-menu-horizontal main-nav">
        		<Link to="/" className="header-brand">
              <img src={logo} srcset={logo + " 1x, " + logoHighDpi + " 2x"} role="presentation" className="header-brand-logo" />
            </Link>

            <UserMenu />
        	</nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
