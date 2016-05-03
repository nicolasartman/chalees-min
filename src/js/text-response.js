import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as data from './data.js';
import * as auth from './auth.js';

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
      peerResponses: []
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
    if (this.props.fakes) {
      this.setState({
        peerResponses: this.props.fakes,
        currentPeerResponse: 0
      });
    }
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
        {this.state.peerResponses.length ? (
          <div style={{marginTop: '1.5em'}}>
            <h4 style={{margin: 0}}>Here are some thoughts your fellow learners shared:</h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {this.state.peerResponses.map((response, index) => (
                <li key={"peer-response-" + index} style={{fontStyle: 'italic', margin: '1em 1em 0 1em'}}>
                  {response}
                </li>
              ))}
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
