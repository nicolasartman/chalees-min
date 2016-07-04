import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as data from './data.js';
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
  onChange: function (event) {
    this.props.setResponse(event.target.value);
  },
  componentDidMount() {
    this.props.allowSaving();
    this.props.addBeforeSaveHook(() => {
      console.log('before save hook fired');
    });
  },
  render: function () {
    const createFakePeerResponses = (fakePeerResponses) => (
      <div style={{marginTop: '1.5em'}}>
        <h4 style={{margin: 0}}>Here are some thoughts your fellow learners shared:</h4>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {fakePeerResponses.map((fakeResponse, index) => (
            <li key={index} style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
              <div style={{width: '3em', marginRight: '0.75em'}}>
                <img src={'https://chalees-min.imgix.net' + fakeResponse.imagePath + '?w=34&h=34&auto=format&mask=ellipse'} className="pure-img"/>
              </div>
              <div>
                <span style={{fontStyle: 'italic'}}>{fakeResponse.response}</span>
                <br />
                &mdash;{fakeResponse.studentName}
              </div>
            </li>
          ))}
        </ul>
      </div>
    );

    const createFakeWordCloudResponse = (wordCloudImagePath) => (
      <div style={{marginTop: '1.5em'}}>
        <div style={{margin: 0, fontSize: '1em'}}>Here are some of the most common words other students used while answering this quiz.</div>
        <img src={'https://chalees-min.imgix.net' + wordCloudImagePath + '?w=726&h=408&fit=clamp&auto=format,compress'} className='pure-img' />
      </div>
    );
    
    
    return (
      <div>
        <LoginGate>
          {cond([
            [() => this.props.short, () => (
              <input
                type="text"
                className="pure-input"
                value={this.props.response || ''}
                onChange={this.onChange}
                style={{width: '100%'}} />
            )],
            [() => true, () => (
              <textarea
                className="pure-input"
                value={this.props.response || ''}
                onChange={this.onChange}
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
