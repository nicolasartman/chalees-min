import React from 'react';

const caontinerStyle = {
	position: 'relative',
	paddingBottom: '56.25%', // 16:9
	paddingTop: 25,
	height: 0
};

const videoStyle = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%'  
};

const VideoInstruction = function(props) {
  const opts = {
    width: '100%'  // This matches the width of the other responses
  };
  
  // If multiple players get used on a page, this needs a unique id
  if (props.videoId) {
    console.log('rendering video');
    return (
      <div style={caontinerStyle}>
        <iframe style={videoStyle} id="youtube-player" type="text/html" width="640" height="390"
          src={'https://www.youtube.com/embed/' + props.videoId + '?autoplay=0'}
          frameborder="0"/>
      </div>
    );
  } else {
    return (
      <div style={caontinerStyle}>
        <iframe style={videoStyle} />
      </div>
    );
  }
}

export default VideoInstruction;