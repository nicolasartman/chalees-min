import React from 'react';
import Dropzone from 'react-dropzone';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import * as data from './data';

const style = {
  width: '100%',
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5,
  position: 'relative',
  paddingTop: '4em',
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
  maxHeight: style.height - style.borderWidth * 2,
  // maxWidth: style.width - style.borderWidth * 2,
  width: 'auto',
  position: 'absolute',
  top: 0,
  left: 0
}

const ImageResponse = React.createClass({
  getInitialState: function () {
    return {
      uploadedImageUrl: this.props.response
    };
  },
  componentDidMount: async function () {
    // Only enable the buttons if the user is logged in
    await auth.authorize();
    this.setState({isSignedIn: true});
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
      // Dropped {this.state.currentFile.name}
      message = (
        <img style={imagePreviewStyle} src={this.state.currentFile.preview} />
      );
    } else if (this.state.isUploading) {
      message = (
        <div>
          <img style={imagePreviewStyle} src={this.state.currentFile.preview} />
          <div style={{position: 'absolute', top: '50%', width: '40%', right: 0, transform: 'translateY(-50%)'}}>
            Uploading (not fully ready, so this will likely not finish)
          </div>
        </div>
      );
    } else {
      message = (
        <div className="image-upload-message">
          Drag and drop a picture here or click/tap here to pick one
        </div>
      );
    }
    
    let uploadedImage = this.state.uploadedImageUrl ? 
      (<img src={this.state.uploadedImageUrl} />) : '';

    return (
      <div>
        <Dropzone onDrop={this.onDrop} style={style} activeStyle={activeStyle} rejectStyle={rejectStyle} multiple={false}>
          {message}
        </Dropzone>
        <div>
          <button className="pure-button" onClick={this.onSave} disabled={!this.state.isSignedIn || !this.state.currentFile || this.state.isUploading}>Save</button>
        </div>
        {uploadedImage}
      </div>
    )
  }
});

export default ImageResponse;
