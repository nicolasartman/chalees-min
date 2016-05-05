import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as data from './data.js';
import * as auth from './auth.js';

// temporary: fake peer responses
import sidPhoto from '../images/fake-responses/sid.png';
import prabsimarPhoto from '../images/fake-responses/prabsimar.png';
import koushikiPhoto from '../images/fake-responses/koushiki.png';

const style = {
  width: '100%',
  minHeight: '200px'
}


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
      useFakePeerResponses: false
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
      useFakePeerResponses: this.props.useFakePeerResponses
    });
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
        <textarea className="pure-input-1" value={this.state.response} onChange={this.onChange} style={style}></textarea>
        <div>
          <button className="pure-button" disabled={!this.state.isSignedIn} onClick={this.onSave}>Save</button>
        </div>
        {this.state.useFakePeerResponses ? (
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
        ) : null}
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
