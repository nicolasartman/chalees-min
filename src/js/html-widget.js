import React from 'react';

const HtmlWidget = React.createClass({
  render: function() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-8">
          <p>Time: {this.props.time} minutes</p>
        </div>
        <div className="pure-u-7-8">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default HtmlWidget;