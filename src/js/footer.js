import { Link } from 'react-router';

const Footer = React.createClass({
  render: function() {
    return (
      <footer id="footer" className="footer">
          <div className="pure-g">
            <div className="pure-u-1">
              <nav className="footer-menu pure-menu pure-menu-horizontal">
                <span>
                  <Link to='/contact' className="pure-menu-link">
                    Contact Us
                  </Link> | 
                  <a href='https://www.facebook.com/chaleesmin/' className="pure-menu-link">
                    Facebook
                  </a> | 
                  <a href='https://www.twitter.com/professorkunal' className="pure-menu-link">
                    Twitter
                  </a>
                </span>
              </nav>
            </div>
          </div>
      </footer>
    );
  }
});

export default Footer;
