import Dropzone from 'react-dropzone';
import uuid from 'node-uuid';
import * as uploader from './uploader.js';
import {authorize} from './auth.js';
import * as data from './data';
import LoginGate from './login-gate.js';
import storage from './storage.js';
import cond from 'lodash/fp/cond';

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
    this.props.allowSaving();
    this.props.addBeforeSaveHook(() => this.beforeSaveHook());
  },
  onDrop: async function ([file]) {
    if (this.state.isUploading) {return;}
    console.log('dropped', file);
    if (file && file.name) {
      this.setState({currentFile: file});
    }
  },
  async beforeSaveHook() {
    const file = this.state.currentFile
    if (file) {
      this.props.setSaveStatusMessage('Uploading...');
      this.setState({isUploading: true});
      
      const user = await authorize();
      const ref = storage.child(`${user.uid}|${uuid.v4()}`);
      const uploadTask = ref.put(file);
      
      // Perform the image upload
      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed', () => {}, error => {
          reject(error);
        }, () => {
          resolve(uploadTask.snapshot.downloadURL);
        })
      });
    } else {
      window.alert('Please choose a picture first');
    }
  },
  render: function () {
    let image;
    if (this.props.response) {
      image = (
        <img className="pure-img" style={{maxHeight: '100%'}} src={this.props.response} />
      )
    } else if (this.state.currentFile) {
      image = (
        <img className="pure-img" style={{maxHeight: '100%'}} src={this.state.currentFile.preview} />
      );
    } else {
      image = (
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
            {image}
          </Dropzone>        
        </LoginGate>
      </div>
    )
  }
});

export default ImageResponse;
