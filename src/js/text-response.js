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
  getInitialState: function () {
    return {
      response: this.props.response,
      responseSubmitted: false
    }
  },
  onChange: function (event) {
    this.setState({
      response: event.target.value
    });
  },
  componentDidMount: async function () {
    // Only enable the buttons if the user is logged in
    const user = await auth.authorize();
    this.setState({isSignedIn: !!user});
  },
  onSave: function () {
    // data.set({
    //   [this.props.itemId]: this.state.response
    // });
    
    actions.saveResponse(this.state.response);
    
    // Use fake data
    this.setState({
      saving: true,
      responseSubmitted: true
    });
  },
  componentWillReceiveProps: function (newProps) {
    // console.log('new props', newProps);
    if (newProps.response != this.props.response) {
      this.setState({
        response: newProps.response
      })
    }
  },
  sendTestAction: actions.incrementTest,
  render: function () {
    const createFakePeerResponses = (fakePeerResponses) => (
      <div style={{marginTop: '1.5em'}}>
        <h4 style={{margin: 0}}>Here are some thoughts your fellow learners shared:</h4>
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
          {fakePeerResponses.map((fakeResponse, index) => (
            <li key={index} style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
              <div style={{width: '3em', marginRight: '0.75em'}}>
                <img src={'https://chalees-min.imgix.net' + fakeResponse.imagePath + '?w=34&h=34'} className="pure-img"/>
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
        <h4 style={{margin: 0}}>Here&apos;s a cloud of words your fellow learners used in their answer:</h4>
        <img src={'https://chalees-min.imgix.net' + wordCloudImagePath + '?w=726&h=408&fit=clamp&auto=format,compress'} className='pure-img' />
      </div>
    );
    
    
    return (
      <div>
        <LoginGate>
          <div style={{position: 'relative'}}>
            {this.props.short ? 
              (<input type="text" className="pure-input" onChange={this.onChange} style={{width: '100%'}} />) :
              (<textarea className="pure-input" onChange={this.onChange} style={{width: '100%',minHeight: '200px'}}></textarea>)
            }
          </div>
        </LoginGate>
        <div>
            <button className="pure-button" style={{marginTop: 15}} disabled={!this.state.isSignedIn || this.state.saving} onClick={this.onSave}>{this.state.saving ? 'Saving...' : 'Save'}</button>
        </div>
        {cond([
          [() => !this.props.hacks || !this.state.responseSubmitted, () => null],
          [() => this.props.hacks.wordCloudImagePath,
            () => createFakeWordCloudResponse(this.props.hacks.wordCloudImagePath)],
          [() => this.props.hacks.fakePeerResponses, 
            () => createFakePeerResponses(this.props.hacks.fakePeerResponses)],
        ])()}
      </div>
    )
  }
});

const TextResponseContainer = connect((state) => ({}))(TextResponse);

export default TextResponseContainer;
