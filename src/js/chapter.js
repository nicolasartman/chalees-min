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
  getInitialState: () => ({}),
  componentDidMount: function() {
    this.setState({
      chapterId: this.props.params.id
    });
  },
  render: function() {
    // Use the magnets chapter if there isn't existing dummy data for the given one
    const currentChapter = chapters[this.state.chapterId] || chapters[13];
    
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              {(currentChapter.items || []).map((item, index) => (
                <LearningItem key={index} {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
});

export default Chapter;