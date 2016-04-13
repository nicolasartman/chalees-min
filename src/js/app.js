import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import pify from 'pify';
import 'babel-polyfill';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import HtmlWidget from './html-widget.js';
import Chapter from './chapter.js';
import HomePage from './home-page.js';
import Header from './header.js';
import '../scss/styles.scss';
import * as data from './data.js';

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
  componentDidMount: async function () {
    data.onUpdate((data) => {
      console.log('updated data');
      this.setState({data});
    });
    await auth.whenLoggedIn();
    this.setState({loggedIn: true});
  },
  getInitialState: function () {
    return {
      data: {}
    };
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} loggedIn={this.state.loggedIn} />
        {React.cloneElement(this.props.children, { loggedIn: this.state.loggedIn, data: this.state.data })}
      </div>
    );
  }
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={HomePage} />
      <Route path="chapter/:id" component={Chapter} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('application'));
