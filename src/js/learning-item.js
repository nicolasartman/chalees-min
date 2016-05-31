import React from 'react';
import Markdown from 'react-markdown';

// The different types of learning item widgets
import VideoInstruction from './video-instruction.js';
import TextResponse from './text-response.js';
import ImageResponse from './image-response.js';
import ImageContent from './image-content.js';

import styleConstants from './style-constants.js';

const kinds = {
  'video': VideoInstruction,
  'textResponse': TextResponse,
  'imageResponse': ImageResponse,
  'image': ImageContent
};

// Render all links from markdown so they open in a new window so the learner
// doesn't potentially lose progress
const linkRenderer = (linkNode) => {
  return <a href={linkNode.href} title={linkNode.title}
            target="_blank" children={linkNode.children} />;
}

const LearningItem = (props) => {
  // due to jsx syntax particularities, the name has to be accessed as a property
  const Child = kinds[props.kind];
  const content = Child ? <Child {...props} /> : props.children;
  return (
    <div className="learning-item">
      <div style={{width: '100%'}}>
        <div className="learning-item-header">
          {props.presenterImagePath ? (
            <img style={{marginRight: 15}} src={"https://chalees-min.imgix.net" + props.presenterImagePath + "?w=34&h=44"} />
          ) : null}
          <div style={{width: '100%'}}>
            <h3 style={{margin: 0}}>{props.title}</h3>
          </div>
          <div className="learning-item-time">
            <div style={{fontWeight: 'bold', marginRight: '0.25em'}}>
              {props.time}
            </div>
            <div>
              Min
            </div>
          </div>
        </div>
        <Markdown source={props.instructions || ''} renderers={{'Link': linkRenderer}}/>
        {content}
      </div>
    </div>
  );
};

export default LearningItem;