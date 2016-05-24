import React from 'react';
import { Link } from 'react-router';

const Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer" className="footer">
        <div className="container">
          <div className="pure-g">
            <div className="pure-u-1">
              <nav className="footer-menu pure-menu pure-menu-horizontal">
                <ul className="pure-menu-list">
                  <li className="pure-menu-item"><Link to='/contact' className="pure-menu-link">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    );
  }
});

export default Footer;
