import React from 'react';
import YouTube from 'react-youtube';

const VideoInstruction = React.createClass({
  render: function() {
    const opts = {
      width: '100%'  // This matches the width of the other responses
    };
    return (
      <YouTube videoId={this.props.videoId} opts={opts} />
    )
  }
});

export default VideoInstruction;