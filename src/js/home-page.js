import React from 'react';
import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';
import chaptersData from './chapter-data.js';

// Clone the chapters since sort mutates the array
const chapters = [...chaptersData]
  .filter(chapter => !chapter.hidden)
  .sort((chapterA, chapterB) => chapterA.number - chapterB.number);

const HomePage = React.createClass({
  render: function() {
    return (
      <div className="container homepage">

        <div className="pure-g row-gap-small">
          <div className="pure-u-1">
            <h2>Grade 6 Science</h2>
          </div>
        </div>

        <div className="pure-g">
          {chapters.map((chapter, index) => (
            <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterNumber={chapter.number} title={chapter.title} />
          ))}
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;