import * as uploader from './uploader.js';
import React from 'react';
import Dropzone from 'react-dropzone';
import * as data from './data';

const style = {
  width: '100%',
  height: 150,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5
};
const activeStyle = {
  borderStyle: 'solid',
  backgroundColor: '#eee'
};
const rejectStyle = {
  borderStyle: 'solid',
  backgroundColor: '#ffdddd'
};

const imagePreviewStyle = {
  maxHeight: '100%',
  width: 'auto'
}

const ImageResponse = React.createClass({
  getInitialState: function () {
    return {
      uploadedImageUrl: this.props.response
    };
  },
  componentWillReceiveProps: function (newProps) {
    if (newProps.response !== this.props.uploadedImageUrl) {
      this.setState({uploadedImageUrl: newProps.response})
    }
  },
  onDrop: async function ([file]) {
    console.log('dropped', file);
    if (file && file.name) {
      this.setState({currentFile: file});
    }
  },
  onSave: async function () {
    this.setState({isUploading: true})
    const uploadedImageUrl = await uploader.uploadFile(this.state.currentFile);
    console.log('image upload url', uploadedImageUrl);

    // TODO: save to firebase
    this.setState({
      uploadedImageUrl: uploadedImageUrl,
      isUploading: false,
      currentFile: null
    });
    
    data.set({
      [this.props.itemId]: uploadedImageUrl
    });
  },
  render: function () {
    let message;
    if (this.state.currentFile && !this.state.isUploading) {
      message = (
        <p>
          Dropped {this.state.currentFile.name}
          <img style={imagePreviewStyle} src={this.state.currentFile.preview} />
        </p>
      );
    } else if (this.state.isUploading) {
      message = 'uploading...';
    } else {
      message = 'Drop an image here';
    }
    
    let uploadedImage = this.state.uploadedImageUrl ? 
      (<img src={this.state.uploadedImageUrl} />) : '';

    return (
      <div>
        <Dropzone onDrop={this.onDrop} style={style} activeStyle={activeStyle} rejectStyle={rejectStyle} multiple={false}>
          {message}
        </Dropzone>
        <div>
          <button className="pure-button" onClick={this.onSave} disabled={!this.props.loggedIn || !this.state.currentFile || this.state.isUploading}>Save</button>
        </div>
        {uploadedImage}
      </div>
    )
  }
});

export default ImageResponse;
