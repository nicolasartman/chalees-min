import React from 'react';
import * as auth from './auth.js';
import * as data from './data.js';
import localStore from 'store';

import Header from './header.js';
import LoadingOverlay from './loading-overlay.js';

// Authorize them to all services if they're signed in

const Application = React.createClass({
  componentDidMount: async function () {
    try {
      await auth.authorize();      
      this.setState({isLoggedIn: true});

      data.onUpdate((data) => {
        console.log('updated data');
        this.setState({data: data || {}});
      });

      // TODO: tie this state to the first firebase value event instead
      console.log('setting state to is ready');
      this.setState({isReady: true});
    } catch (error) {
      this.setState({isLoggedIn: false});

      // TODO: improve this logic?
      this.setState({isReady: true});
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
        <Header lock={this.lock} authProfile={this.state.authProfile} loggedIn={this.state.isLoggedIn} />
        {React.cloneElement(this.props.children, { loggedIn: this.state.isLoggedIn, data: this.state.data })}
      </div>
    );
  }
});

export default Application;