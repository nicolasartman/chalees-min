import React from 'react';
import YouTube from 'react-youtube';

const VideoInstruction = React.createClass({
  render: function() {
    const opts = {
      width: '800'  // This matches the width of the other responses
    };
    return (
      <YouTube videoId="EArZXsRXsj4" opts={opts} />
    )
  }
});

export default VideoInstruction;
