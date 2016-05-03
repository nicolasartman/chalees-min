import React from 'react';
import Markdown from 'react-markdown';

// The different types of learning item widgets
import VideoInstruction from './video-instruction.js';
import TextResponse from './text-response.js';
import ImageResponse from './image-response.js';
import ImageContent from './image-content.js';

import styleConstants from './style-constants.js';

const learningItemStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '1.25em 1.25em',
  marginTop: '1.5em',
  background: 'white',
  border: '1px solid #E0E0E0',
  borderRadius: 5,
};


const timeContainerStyle = {
  marginLeft: '1em',
  minWidth: '4em',
  padding: '0.5em 0',
  color: '#EEE',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: styleConstants.chaleesPurple,
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row-reverse',
}
const infoContainerStyle = {
  width: '100%',
};

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
    <div style={learningItemStyle}>
      <div style={{width: '100%'}}>
        <div style={headerStyle}>
          <div style={timeContainerStyle} className="learning-item-time">
            <div style={{fontWeight: 'bold', marginRight: '0.25em'}}>
              {props.time}
            </div>
            <div>
              Min
            </div>
          </div>
          <div style={infoContainerStyle}>
            <h3 style={{margin: 0}}>{props.title}</h3>
          </div>
        </div>
        <Markdown source={props.instructions || ''} renderers={{'Link': linkRenderer}}/>
        {content}
      </div>
    </div>
  );
};

export default LearningItem;