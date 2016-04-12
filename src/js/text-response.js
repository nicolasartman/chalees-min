import React from 'react';
import * as data from './data.js';
import * as auth from './auth.js';

const style = {
  width: '100%',
  minHeight: '200px'
}

const ImageAnswer = React.createClass({
  getInitialState: function () {
    return {
      response: this.props.response
    }
  },
  onChange: function (event) {
    this.setState({
      response: event.target.value
    });
  },
  onSave: function () {
    data.set({
      [this.props.itemId]: this.state.response
    });
  },
  componentWillReceiveProps: function (newProps) {
    console.log('new props', newProps);
    if (newProps.response != this.props.response) {
      this.setState({
        response: newProps.response
      })
    }
  },
  render: function () {
    return (
      <div>
        <textarea className="pure-input-1" value={this.state.response} onChange={this.onChange} style={style}></textarea>
        <div className="pure-u-1">
          <button className="pure-button" disabled={!this.props.loggedIn} onClick={this.onSave}>Save</button>
        </div>
      </div>
    )
  }
});

export default ImageAnswer;
