import * as uploader from './uploader.js';
import React from 'react';
import Dropzone from 'react-dropzone';

const ImageAnswer = React.createClass({
  onDrop: async function ([file]) {
    console.log('dropped', file);
    if (file && file.name) {
      const result = await uploader.uploadFile(file);
    }
  },
  render: function () {
    // TODO: gray it out if not logged in
    return (
      <Dropzone onDrop={this.onDrop} />
    )
  }
});

export default ImageAnswer;
