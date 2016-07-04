import React from 'react';
import Dropzone from 'react-dropzone';
import * as uploader from './uploader.js';
import * as auth from './auth.js';
import * as data from './data';
import LoginGate from './login-gate.js';

const style = {
  width: '100%',
  height: 200,
  borderWidth: 2,
  borderColor: '#666',
  borderStyle: 'dashed',
  borderRadius: 5,
};
const activeStyle = {
  borderStyle: 'solid',
  backgroundColor: '#eee'
};
const rejectStyle = {
  borderStyle: 'solid',
  backgroundColor: '#ffdddd'
};

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
    if (this.state.isUploading) {return;}
    console.log('dropped', file);
    if (file && file.name) {
      this.setState({currentFile: file});
    }
  },
  onSave: async function () {
    if (this.state.currentFile) {
      this.setState({isUploading: true})
      // const uploadedImageUrl = await uploader.uploadFile(this.state.currentFile);
      // console.log('image upload url', uploadedImageUrl);
      
      // TEMP
      
      return;
      // TODO: save to firebase
      this.setState({
        uploadedImageUrl: uploadedImageUrl,
        isUploading: false,
        currentFile: null
      });
    
      // data.set({
      //   [this.props.itemId]: uploadedImageUrl
      // });
    } else {
      window.alert('Please choose your image first');
      // TODO: turn this into a modal or something?
    }
  },
  render: function () {
    let message;
    if (this.state.currentFile) {
      message = (
        <img className="pure-img" style={{maxHeight: '100%'}} src={this.state.currentFile.preview} />
      );
    } else {
      message = (
        <div className="image-upload-message" style={{padding: '0 1.5em', textAlign: 'center'}}>
          Drag and drop a picture here or click/tap here to pick one
        </div>
      );
    }
    
    let uploadedImage = this.state.uploadedImageUrl ? 
      (<img src={this.state.uploadedImageUrl} />) : '';

    return (
      <div>
        <LoginGate>
          <Dropzone className="image-upload-dropzone" onDrop={this.onDrop} style={style} activeStyle={activeStyle} rejectStyle={rejectStyle} multiple={false}>
            {message}
          </Dropzone>
        </LoginGate>
        {uploadedImage}
      </div>
    )
  }
});

export default ImageResponse;
