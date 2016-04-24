import React from 'react';
import { Link } from 'react-router';

export default (props) => (
  <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-4 pure-u-xl-1-4 homepage-tile">
    <div className="homepage-tile-content">
      <Link to="/chapter/{props.chapterNumber}">
        <img className="pure-img" src={props.photo} />
        <div className="homepage-tile-chapter-number">{props.chapterNumber}</div>
        <div className="homepage-tile-title">
          {props.title}
        </div>
      </Link>
    </div>
  </div>
)