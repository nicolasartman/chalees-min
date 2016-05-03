import React from 'react';
import Markdown from 'react-markdown';

import VideoInstruction from './video-instruction.js';
import TextResponse from './text-response.js';
import ImageResponse from './image-response.js';
import styleConstants from './style-constants.js';

const learningItemStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '1em',
  marginTop: '1.5em',
  background: 'white',
  border: '1px solid #E0E0E0',
  borderRadius: '5px',
};


const timeContainerStyle = {
  // marginRight: '1em',
  marginLeft: '1em',
  minWidth: '4em',
  // minWidth: '100%',
  padding: '0.5em 0',
  color: '#EEE',
  display: 'flex',
  // flexDirection: 'column',
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
  'imageResponse': ImageResponse
};


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
        <Markdown escapeHtml={true} source={props.instructions || ''} />
        {content}
      </div>
    </div>
  );
};

export default LearningItem;