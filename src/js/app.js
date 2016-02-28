import React from 'react';
import ReactDOM from 'react-dom';

import some from './some-component.js';
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


const awsConfig = {
  bucket:         'assets.tests.auth0.com',
  folder_prefix:  'learning-prototype-user-uploads/',
  role:           'arn:aws:iam::010616021751:role/access-to-s3-per-user',  // AWS role arn
  principal:      'arn:aws:iam::010616021751:saml-provider/auth0-provider', // AWS saml provider arn
  domain:         'matugit.auth0.com',                // Auth0 domain
  clientID:       'bm70oLevwEM6PjICBnczyNySHjFkDcNR', // Auth0 app client id
  targetClientId: 'jAbmUzhI7KZ5cWG8gsyT3IaTg0dS9KZV' // Auth0 AWS API client id
};


const Header = React.createClass({
  showLock: function () {
    this.props.lock.show()
  },
  render: function () {
    return (
      <header id="header" className="header">
      	<nav className="home-menu pure-menu pure-menu-horizontal main-nav">
      		Needs-a-name!?

      		<ul className="pure-menu-list pull-right">
      			<li className="pure-menu-item">
              <a href="#" onClick={this.showLock} className="pure-menu-link">
                Sign in with Google
              </a>
            </li>
      		</ul>
      	</nav>
      </header>  
    )
  }
})

const Application = React.createClass({
  componentWillMount: function () {
    this.lock = new Auth0Lock('zvMJBINrPP41PVpc0OSfNxD3V4nQoVu9', 'learning-prototype.auth0.com');
  },
  render: function () {
    return (
      <div>
    		<Header lock={this.lock} />
    		<main id="main">
        	<div className="row">
        		<div className="col-xs-12">
        			content!!
        		</div>				
        	</div>    
    		</main>
      </div>    
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('application'));
