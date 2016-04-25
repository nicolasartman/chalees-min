import React from 'react';
import styleConstants from './style-constants.js';

const learningItemStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  paddingTop: '2em'
};

// TODO: make smaller on mobile
const timeContainerStyle = {
  marginRight: '1.5em',
  width: '4em',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
};

const timeStyle = {
  fontSize: '2.5em',
  color: styleConstants.chaleesRed
}

const LearningItem = (props) => (
  <div style={learningItemStyle}>
    <div style={timeContainerStyle}>
      <div style={timeStyle}>
        {props.time}
      </div>
      <div>
        Min
      </div>
    </div>
    <div style={{width: '100%'}}>
      {props.children}
    </div>
  </div>
)

export default LearningItem;