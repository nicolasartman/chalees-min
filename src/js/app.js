import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
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
import localStore from 'store';

// Authorize them to all services if they're signed in

const Application = React.createClass({
  componentDidMount: async function () {
    if (!localStore.enabled) {
      // TODO: give a nice in-page dismissable alert instead
      alert('You may be using an unsupported browser or be in a private ' +
        'browsing session, so we will not be able to keep you logged in and ' +
        'save your progress reliably. Please switch browser or into a regular ' +
        'window if you can, and also do not hesitate to let us know about this. ' +
      'Thank you for your understanding.');
    }
    
    try {
      await auth.authorize();      
      this.setState({isLoggedIn: true});
      data.onUpdate((data) => {
        console.log('updated data');
        this.setState({data: data || {}});
      });
    } catch (error) {
      this.setState({isLoggedIn: false})
    }
  },
  getInitialState: function () {
    return {
      data: {}
    };
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} loggedIn={this.state.isLoggedIn} />
        {React.cloneElement(this.props.children, { loggedIn: this.state.isLoggedIn, data: this.state.data })}
      </div>
    );
  }
})

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={HomePage} />
      <Route path="chapter/:id" component={Chapter} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('application'));
