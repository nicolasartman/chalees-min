// Polyfills for mobile safari and IE
import 'core-js/fn/array/find';
import 'core-js/fn/array/includes';

import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';

// Has to be at the top to initialize firebase configuration
import './initialize-firebase.js';

import * as uploader from './uploader.js';
import * as auth from './auth.js';

import Chapter from './chapter.js';
import Contact from './contact.js';
import HomePage from './home-page.js';
import Application from './application.js';
import Header from './header.js';
import Footer from './footer.js';
import Category from './category.js';

import '../scss/styles.scss';

ReactDOM.render((
  <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={Application}>
      <IndexRoute components={{children: HomePage, footer: () => null}} />
      <Route path="chapter/:id" components={{children: Chapter, header: Header}} />
      <Route path="contact" components={{children: Contact, header: Header}} />
      <Route path="english/:categoryId" components={{children: Category, header: Header}} />
      <Redirect from="*" to="/" />
    </Route>
  </Router>
), document.getElementById('application'));
