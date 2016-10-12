import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';
import {chapter6Data, chapter7Data} from './chapter-data.js';
import sortBy from 'lodash/sortBy';

log(chapter6Data, chapter7Data)

// Clone the chapters since sort mutates the array
const chapter6Lessons = sortBy(
  [...chapter6Data].filter(chapter => !chapter.hidden),
  chapter => parseInt(chapter.id, 10)
);

const chapter7Lessons = sortBy(
  [...chapter7Data].filter(chapter => !chapter.hidden),
  chapter => parseInt(chapter.id, 10)
);

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
          {chapter6Lessons.map((chapter, index) => (
            <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title} />
          ))}
        </div>

        <div className="pure-g row-gap-small">
          <div className="pure-u-1">
            <h2>Grade 7 Science</h2>
          </div>
        </div>

        <div className="pure-g">
          {chapter7Lessons.map((chapter, index) => (
            <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title} />
          ))}
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;
