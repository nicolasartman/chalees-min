import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';
import chaptersData from './chapter-data.js';
import sortBy from 'lodash/sortBy';

// Clone the chapters since sort mutates the array
const chapters = sortBy(
  [...chaptersData].filter(chapter => !chapter.hidden),
  'id'
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
          {chapters.map((chapter, index) => (
            <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title} />
          ))}
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;