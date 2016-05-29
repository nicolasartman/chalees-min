import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';
import localStore from 'store';
import firebase from 'firebase';

// Has to be at the top to initialize firebase configuration
import './initialize-firebase.js';

import * as uploader from './uploader.js';
import * as auth from './auth.js';
import Chapter from './chapter.js';
import Contact from './contact.js';
import HomePage from './home-page.js';
import Application from './application.js';

import '../scss/styles.scss';

if (!localStore.enabled) {
  // TODO: give a nice in-page dismissable alert in a standalone component instead
  alert('You may be using an unsupported browser or be in a private ' +
    'browsing session, so we will not be able to keep you logged in and ' +
    'save your progress reliably. Please switch browser or into a regular ' +
    'window if you can, and also do not hesitate to let us know about this. ' +
  'Thank you for your understanding.');
}

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Application}>
      <IndexRoute component={HomePage} />
      <Route path="chapter/:id" component={Chapter} />
      <Route path="contact" component={Contact} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('application'));
