import React from 'react';
import pify from 'pify';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import LearningItem from './learning-item.js';
import HomePage from './home-page.js';
import Header from './header.js';
import * as data from './data.js';

const Chapter = React.createClass({
  render: function() {
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              <LearningItem time="4">
                <h3>Learn</h3>
                <p>Why do plants produce flowers? Watch this video to find out.</p>
                <VideoInstruction videoId="EArZXsRXsj4" />
              </LearningItem>
            </div>
            <div className="pure-u-1">
              <LearningItem time="6">
                <h3>Reflect</h3>
                <p>Take a picture and drop it here</p>
                <ImageResponse itemId="step-1" loggedIn={this.props.loggedIn} response={this.props.data['step-1']} />
              </LearningItem>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <LearningItem time="10">
                <h3>Reflect</h3>
                <p>Write down your thoughts about flowers</p>
                <TextResponse itemId="step-2" loggedIn={this.props.loggedIn} response={this.props.data['step-2']} />
              </LearningItem>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <LearningItem time="10">
                <h3>Conduct your own experiment</h3>
                <p>
                  Follow the instructions in the link on how to conduct your own experiment on flowers. <a href="https://goo.gl/cuf63n">https://goo.gl/cuf63n</a>
                </p>
                <img className="pure-img" src="http://cdn.instructables.com/FA6/OOPP/I916FK0J/FA6OOPPI916FK0J.MEDIUM.jpg" />
              </LearningItem>
            </div>
          </div>
        </main>
      </div>
    );
  }
});

export default Chapter;