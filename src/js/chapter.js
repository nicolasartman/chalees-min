import React from 'react';
import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
    console.log('mounted chapter component', this.props.params.id);
    this.setState({
      chapterId: parseInt(this.props.params.id, 10)
    });
  },
  // disabled until we find a more efficient way to do it or
  // decide it's worth the additional complexity
  // initializeVisualFocusEffect: function () {
  //   // hacky. needs to be refactored once any of this data is fetched asynchronously.
  //   const learningItems = [...ReactDom.findDOMNode(this).querySelectorAll('.learning-item')]
  //     .map(element => ({
  //       topBound: Math.round(element.offsetTop + (element.offsetHeight * 0.4)),
  //       bottomBound: Math.round(element.offsetTop + (element.offsetHeight * 0.6)),
  //       node: element
  //     }));
  //
  //   let recentlyScrolled = false;
  //   let focusedLearningItems = [];
  //
  //   this.scrollListener = () => recentlyScrolled = true;
  //
  //   window.addEventListener('scroll', this.scrollListener);
  //
  //   function updateFocusedLearningItem() {
  //     recentlyScrolled = false;
  //     const viewportTop = window.pageYOffset;
  //     const viewportBottom = viewportTop + window.innerHeight;
  //
  //     let newlyFocusedItems = [];
  //     const numberOfLearningItems = learningItems.length;
  //
  //     // All the items that have over 25% of themselves viewable are considered
  //     // focused
  //     for (let index = 0; index < numberOfLearningItems; index += 1) {
  //       // If the item is the topmost one in the page (with a UX allowance
  //       // so part of the item can be scrolled past while still considering
  //       // it in focus)
  //       if (learningItems[index].bottomBound > viewportTop &&
  //           learningItems[index].topBound < viewportBottom) {
  //         newlyFocusedItems.push(learningItems[index]);
  //       }
  //     }
  //
  //     console.log('focused items (new, current)', newlyFocusedItems, focusedLearningItems);
  //
  //     // If the set of focused items has changed, update which elements have the class
  //     if (newlyFocusedItems.length !== focusedLearningItems.length ||
  //         newlyFocusedItems[0] !== focusedLearningItems[0]) {
  //       learningItems.map(item => item.node.classList.remove('focused'));
  //       newlyFocusedItems.map(item => item.node.classList.add('focused'));
  //       focusedLearningItems = newlyFocusedItems;
  //     }
  //   }
  //
  //   this.scrollCheckInterval = window.setInterval(() => {
  //     if (recentlyScrolled) {
  //      updateFocusedLearningItem()
  //     }
  //   }, 100);
  //
  //   updateFocusedLearningItem();
  // },
  componentWillUnmount: function () {
    // disabled for now -- see note above
    // window.clearInterval(this.scrollCheckInterval);
    // window.removeEventListener('scroll', this.scrollListener);
  },
  render: function() {
    // Use the magnets chapter if there isn't existing dummy data for the given one
    const currentChapter = chapters.find(chapter => chapter.number === this.state.chapterId);
    
    // hackity hack -- disabled. see note above
    // if (currentChapter && !this.focusEffectInitialized) {
    //   console.log('init focus effect');
    //   this.focusEffectInitialized = true;
    //   window.setTimeout(this.initializeVisualFocusEffect);
    // }
    
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              {((currentChapter && currentChapter.items) || []).map((item, index) => (
                <LearningItem key={index} {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }
});

export default Chapter;