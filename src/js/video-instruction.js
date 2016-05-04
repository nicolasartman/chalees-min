import React from 'react';
import LoadingSpinner from './loading-spinner.js';

const containerStyle = {
	position: 'relative',
	paddingBottom: '56.25%', // 16:9
	paddingTop: 25,
	height: 0,
  backgroundColor: 'black'
};

const videoStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
  zIndex: 1000
};

const loadingMessageStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  color: '#CCCCCC',
  textAlign: 'center',
  transform: 'translateY(-50%) translateX(-50%)',
  zIndex: 1
};

const VideoInstruction = function(props) {
  const opts = {
    width: '100%'  // This matches the width of the other responses
  };
  console.log('within video instruction', props);

  // If multiple players get used on a page, this needs a unique id
  if (props.videoId) {
    return (
      <div style={containerStyle}>
        <div style={loadingMessageStyle}>
          <LoadingSpinner />
        </div>
        <iframe style={videoStyle} id="youtube-player" type="text/html" width="640" height="390"
          src={'https://www.youtube.com/embed/' + props.videoId + '?autoplay=0'}
          allowFullScreen frameborder="0"/>
      </div>
    );
  } else {
    return (
      <div style={containerStyle}>
        <iframe style={videoStyle} />
      </div>
    );
  }
}

export default VideoInstruction;