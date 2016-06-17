import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as auth from './auth.js';
import * as data from './data.js';

import Header from './header.js';
import Footer from './footer.js';
import LoadingOverlay from './loading-overlay.js';

// Authorize them to all services if they're signed in

const Application = React.createClass({
  componentDidMount: async function () {
    const handleReady = () => this.setState({isReady: true});
    auth.whenReady()
      .then(handleReady, handleReady);

    try {
      await auth.authorize();
      this.setState({isLoggedIn: true});

      data.onUpdate((data) => {
        console.log('updated data');
        this.setState({data: data || {}});
      });
    } catch (error) {
      this.setState({isLoggedIn: false});
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
        <LoadingOverlay shouldShow={!this.state.isReady} />
        <Header />
        <ReactCSSTransitionGroup component="div" transitionName="page" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, { key: location.pathname, loggedIn: this.state.isLoggedIn, data: this.state.data })}
        </ReactCSSTransitionGroup>
        { /* <Footer /> */ }
      </div>
    );
  }
});

export default Application;