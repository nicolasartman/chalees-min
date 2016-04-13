import React from 'react';
import { Link } from 'react-router';

const HomePage = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Grade 6 Science</h2>
        <div className="pure-g">
          <div className="pure-u-1-3">
            <img className="pure-img" src="http://img.youtube.com/vi/EArZXsRXsj4/0.jpg" />
            <p><Link to="/chapter/7">Chapter 7: Why do plants produce flowers?</Link></p>
          </div>
          <div className="pure-u-1-3">
            <img className="pure-img" src="http://img.youtube.com/vi/yjSNU62kxZo/0.jpg" />
            <p><Link to="/chapter/13">Chapter 13: When do magnets misbehave?</Link></p>
          </div>
          <div className="pure-u-1-3">
            <img className="pure-img" src="http://img.youtube.com/vi/zHeWx_AifLs/0.jpg" />
            <p><Link to="/chapter/1">Chapter 1: Where does food come from?</Link></p>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;