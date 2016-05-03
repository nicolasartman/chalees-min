import React from 'react';
import pify from 'pify';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import LearningItem from './learning-item.js';
import HomePage from './home-page.js';
import Header from './header.js';
import * as data from './data.js';
import chapters from './chapter-data.js';

const Chapter = React.createClass({
  getInitialState: function() {
    return {
      chapter: {
        video: {},
        response: {},
        question: {},
        experiment: {}
      }
    };
  },
  componentDidMount: function() {
    // Hardcode to the magnets chapter if there isn't existing dummy data for the given chapter
    this.setState({
      chapter: chapters[this.props.params.id] || chapters[13]
    });
  },
  render: function() {
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              <LearningItem time="4" title={this.state.chapter.video.title} instructions={this.state.chapter.video.description}>
                <VideoInstruction videoId={this.state.chapter.video.videoId} />
              </LearningItem>
            </div>
            <div className="pure-u-1">
              <LearningItem time="10" title={this.state.chapter.question.title} instructions={this.state.chapter.question.description}>
                <TextResponse itemId="step-2" loggedIn={this.props.loggedIn} response={this.props.data['step-2']} />
              </LearningItem>
            </div>
            <div className="pure-u-1">
              <LearningItem time="6" title={this.state.chapter.response.title} instructions={this.state.chapter.response.description}>
                <ImageResponse itemId="step-1" loggedIn={this.props.loggedIn} response={this.props.data['step-1']} />
              </LearningItem>
            </div>
            <div className="pure-u-1">
              <LearningItem time="10" title={this.state.chapter.experiment.title} instructions={this.state.chapter.experiment.description}>
                <img className="pure-img" src={this.state.chapter.experiment.image} />
              </LearningItem>
            </div>
          </div>
        </main>
      </div>
    );
  }
});

export default Chapter;