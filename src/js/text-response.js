import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from 'react-modal';
import * as data from './data.js';
import * as auth from './auth.js';
import styles from './style-constants.js';

import logo from '../images/chalees-min-logo-icon.svg';

// temporary: fake responses
// fake peer responses
import sidPhoto from '../images/fake-responses/sid.png';
import prabsimarPhoto from '../images/fake-responses/prabsimar.png';
import koushikiPhoto from '../images/fake-responses/koushiki.png';
// fake word cloud response
import wordCloudPhoto from '../images/fake-responses/word-cloud.png';

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
      displayResponses: false,
      isModalOpen: false
    }
  },
  statics: {
    // TODO: this should move to learning-item.js as constants for all response types
    fakeResponses: {
      'peer': (
        <div style={{marginTop: '1.5em'}}>
          <h4 style={{margin: 0}}>Here are some thoughts your fellow learners shared:</h4>
          <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            <li style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
              <div style={{width: '3em', marginRight: '0.75em'}}>
                <img src={koushikiPhoto} className="pure-img"/>
              </div>
              <div>
                <span style={{fontStyle: 'italic'}}>Where does the silverware that I eat with come from?</span>
                <br />
                &mdash;Koushiki
              </div>
            </li>
  
            <li style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
              <div style={{width: '3em', marginRight: '0.75em'}}>
                <img src={sidPhoto} className="pure-img"/>
              </div>
              <div>
                <span style={{fontStyle: 'italic'}}>Where does cheese come from?</span>
                <br />
                &mdash;Sid
              </div>
            </li>
  
            <li style={{margin: '1em 1em 0 1em', display: 'flex', alignItems: 'center'}}>
              <div style={{width: '3em', marginRight: '0.75em'}}>
                <img src={prabsimarPhoto} className="pure-img"/>
              </div>
              <div>
                <span style={{fontStyle: 'italic'}}>Where does concrete come from?</span>
                <br />
                &mdash;Parbsimar
              </div>
            </li>
          </ul>
        </div>
      ),
      'wordCloud': (
        <div style={{marginTop: '1.5em'}}>
          <h4 style={{margin: 0}}>Here are some thoughts your fellow learners shared:</h4>
          <img src={wordCloudPhoto} className='pure-img' />
        </div>
      )
    }
  },
  onChange: function (event) {
    this.setState({
      response: event.target.value
    });
  },
  onSave: function () {
    // data.set({
    //   [this.props.itemId]: this.state.response
    // });
    
    // Use fake data
    this.setState({
      displayResponses: true
    });
  },
  onLoginGateClick: function () {
    if (!this.state.isSignedIn) {
      this.setState({isModalOpen: true});
    }
  },
  closeModal: function () {
    this.setState({isModalOpen: false});
  },
  componentDidMount: async function () {
    // Only enable the buttons if the user is logged in
    await auth.authorize();
    this.setState({isSignedIn: true});
  },
  componentWillReceiveProps: function (newProps) {
    // console.log('new props', newProps);
    if (newProps.response != this.props.response) {
      this.setState({
        response: newProps.response
      })
    }
  },
  render: function () {
    return (
      <div>
        <div style={{position: 'relative'}}>
          {!this.state.isSignedIn ? <div className="login-gate-overlay" onClick={this.onLoginGateClick}>
                                      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%) translateY(-50%)'}}>Please Sign In</div>
                                    </div> : null}
          {this.props.short ? 
            (<input type="text" className="pure-input" value={this.state.response} onChange={this.onChange} style={{width: '100%'}} />) :
            (<textarea className="pure-input" value={this.state.response} onChange={this.onChange} style={{width: '100%',minHeight: '200px'}}></textarea>)
          }
        </div>
        <div>
          <button className="pure-button" style={{marginTop: 15}} disabled={!this.state.isSignedIn} onClick={this.onSave}>Save</button>
        </div>
        {this.state.displayResponses ? this.constructor.fakeResponses[this.props.fakeResponseType] : null}
        <Modal isOpen={this.state.isModalOpen} onRequestClose={this.closeModal} className="modal" overlayClassName="modal-overlay">
          <div style={{textAlign: 'center'}}>
            <h1><img src={logo}/> Please Sign In</h1>
            <p>This lets us save your thoughts so you can come back to them.</p>
            <p style={{marginTop: '2em'}}><button style={{width: '100%', maxWidth: '15em'}}className="pure-button" onClick={auth.showGoogleLoginPrompt}>Sign in with Google</button></p>
            <p><button style={{width: '100%', maxWidth: '15em'}}className="pure-button" onClick={auth.showFacebookLoginPrompt}>Sign in with Facebook</button></p>
            <p>
              <button onClick={this.closeModal} style={{width: '100%', maxWidth: '15em'}} className="pure-button button-secondary">Not Yet</button>
            </p>
          </div>
        </Modal>
      </div>
    )
  }
});

// {this.state.peerResponses.length ? (
//   <div style={{position: 'relative', height: '20em'}}>
//     <ReactCSSTransitionGroup transitionName="fade-switch" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
//       {this.state.peerResponses.map((response, responseNumber) => (
//         this.state.currentPeerResponse === responseNumber ?
//           <PeerResponse key={responseNumber} text={'test' + responseNumber} /> : null
//       ))}
//     </ReactCSSTransitionGroup>
//     <div style={{position: absolute}}></div>
//   </div>
// ) : null}


export default TextResponse;
