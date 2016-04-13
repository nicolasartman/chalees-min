import React from 'react';
import ReactDOM from 'react-dom';
import pify from 'pify';
import 'babel-polyfill';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import HtmlWidget from './html-widget.js';
import Header from './header.js';
import '../scss/styles.scss';
import * as data from './data.js';

// const signInWithGoogle = () => {
//   const rootRef = new Firebase("https://learning-prototype.firebaseio.com");
//   rootRef.authWithOAuthPopup("google", function(error, authData) {
//     if (error) {
//       console.log("Login Failed!", error);
//     } else {
//       console.log("Authenticated successfully with payload:", authData);
//     }
//   });
// }

const Application = React.createClass({
  componentDidMount: async function () {
    data.onUpdate((data) => {
      console.log('updated data');
      this.setState({data});
    });
    await auth.whenLoggedIn();
    this.setState({loggedIn: true});
  },
  getInitialState: function () {
    return {
      data: {}
    };
  },
  render: function () {
    return (
      <div>
        <Header lock={this.lock} authProfile={this.state.authProfile} loggedIn={this.state.loggedIn} />
        <main id="main" className="content">
          <div className="pure-g">
            <div className="pure-u-1">
              <HtmlWidget time="4">
                <h3>Learn</h3>
                <p>Why do plants produce flowers? Watch this video to find out.</p>
                <VideoInstruction videoId="EArZXsRXsj4" />
              </HtmlWidget>
            </div>
            <div className="pure-u-1">
              <HtmlWidget time="6">
                <h3>Reflect</h3>
                <p>Take a picture and drop it here</p>
                <ImageResponse itemId="step-1" loggedIn={this.state.loggedIn} response={this.state.data['step-1']} />
              </HtmlWidget>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <HtmlWidget time="10">
                <TextResponse itemId="step-2" loggedIn={this.state.loggedIn} response={this.state.data['step-2']} />
              </HtmlWidget>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <HtmlWidget time="10">
                <h3>Conduct your own experiment</h3>
                <p>
                  Follow the instructions in the link on how to conduct your own experiment on flowers. <a href="http://goo.gl/cuf63n">http://goo.gl/cuf63n</a>
                </p>
                <img src="http://cdn.instructables.com/FA6/OOPP/I916FK0J/FA6OOPPI916FK0J.MEDIUM.jpg" />
              </HtmlWidget>
            </div>
          </div>
        </main>
      </div>
    );
  }
})

ReactDOM.render(<Application />, document.getElementById('application'));
