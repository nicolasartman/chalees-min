import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import random from 'lodash.random';

import LoadingSpinner from './loading-spinner.js';

import heart from '../images/chalees-min-heart.png';
import logo from '../images/chalees-min-logo-inverse-name.png';
import logoHighDpi from '../images/chalees-min-logo-inverse-name@2x.png';

const messages = [
  "Getting ready to explore the beauty of the world"
];

const LoadingOverlay = React.createClass({
  getInitialState: function () {
    return {
      message: messages[random(messages.length - 1)]
    }
  },
  render: function () {
    const loadingOverlay = (
      <div className="loading-overlay" key="chalees-min-main-loading-overlay">
        <img className="pure-img loading-overlay-heart" src={heart} alt="Chalees Min School Heart Logo, because we love to learn!" />
        <img className="pure-img loading-overlay-logo" src={logo} srcSet={logo + " 1x, " + logoHighDpi + " 2x"} />
        <p className="loading-overlay-message">{this.state.message}</p>

        <LoadingSpinner />
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
