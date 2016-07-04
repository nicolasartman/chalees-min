import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './style-constants.js';
import * as actions from './actions/actions.js';
import LoginGate from './login-gate.js';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import * as auth from './auth.js';
import cond from 'lodash/fp/cond';

import logo from '../images/chalees-min-logo-icon.svg';

// temporary: fake responses
// fake peer responses
import sidPhoto from '../images/fake-responses/sid.png';
import prabsimarPhoto from '../images/fake-responses/prabsimar.png';
import koushikiPhoto from '../images/fake-responses/koushiki.png';

// const peerResponseContainerStyle = {
//   width: '100%',
//   minHeight: '20em'
// };

// const PeerResponse = (props) => (
//   <div style={peerResponseContainerStyle}>
//     response {props.text}
//   </div>
// );

const TextResponse = React.createClass({
  propTypes: {
    response: React.PropTypes.any
  },
  handleChange: function (event) {
    this.props.setResponse(event.target.value);
  },
  componentDidMount() {
    this.props.allowSaving();
  },
  render: function () {
    return (
      <div>
        <LoginGate>
          {cond([
            [() => this.props.short, () => (
              <input
                type="text"
                className="pure-input"
                value={this.props.response || ''}
                onChange={this.handleChange}
                style={{width: '100%'}} />
            )],
            [() => true, () => (
              <textarea
                className="pure-input"
                value={this.props.response || ''}
                onChange={this.handleChange}
                style={{width: '100%', minHeight: '200px'}}>
              </textarea>
            )]
          ])()}
        </LoginGate>
      </div>
    )
  }
});


export default TextResponse;
