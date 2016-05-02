import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';

import chaleesMinLogo from '../images/chalees-min-logo.png';

const messages = [
  "Getting ready to explore the beauty of the world"
];

const LoadingOverlay = React.createClass({
  getInitialState: function () {
    return {
      message: messages[_.random(messages.length - 1)]
    }
  },
  render: function () {
    const loadingOverlay = (
      <div className="loading-overlay" key="chalees-min-main-loading-overlay">
        <img className="loading-overlay-logo" src={chaleesMinLogo} alt="Chalees Min School Heart Logo, because we love to learn!" />
        <h1 className="loading-overlay-brand">Chalees Min School</h1>
        <p className="loading-overlay-message">{this.state.message}</p>
      </div>
    );

    return (
      <ReactCSSTransitionGroup transitionName="fade-out" transitionEnterTimeout={0} transitionLeaveTimeout={250}>
        {this.props.shouldShow ? loadingOverlay : <div />}
      </ReactCSSTransitionGroup>
    );
  }
});

export default LoadingOverlay;