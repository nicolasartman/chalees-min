import React from 'react';
import pify from 'pify';
import 'babel-polyfill';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import HtmlWidget from './html-widget.js';
import HomePage from './home-page.js';
import Header from './header.js';
import '../scss/styles.scss';
import * as data from './data.js';

const Chapter = React.createClass({
  render: function() {
    return (
      <div>
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
                <ImageResponse itemId="step-1" loggedIn={this.props.loggedIn} response={this.props.data['step-1']} />
              </HtmlWidget>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <HtmlWidget time="10">
                <TextResponse itemId="step-2" loggedIn={this.props.loggedIn} response={this.props.data['step-2']} />
              </HtmlWidget>
            </div>
            <div className="pure-u-1 row-gap-medium">
              <HtmlWidget time="10">
                <h3>Conduct your own experiment</h3>
                <p>
                  Follow the instructions in the link on how to conduct your own experiment on flowers. <a href="https://goo.gl/cuf63n">https://goo.gl/cuf63n</a>
                </p>
                <img src="http://cdn.instructables.com/FA6/OOPP/I916FK0J/FA6OOPPI916FK0J.MEDIUM.jpg" />
              </HtmlWidget>
            </div>
          </div>
        </main>
      </div>
    );
  }
});

export default Chapter;