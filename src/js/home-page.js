import React from 'react';
import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';

// Images
import flowerMarketImage from '../images/flower-market.jpg';
import magnetImage from '../images/magnets.jpg';
import foodSourcesImage from '../images/food-sources.jpg';

const HomePage = React.createClass({
  render: function() {
    return (
      <div className="container homepage">

        <div className="pure-g">
          <div className="pure-u-1">
            <h2>Grade 6 Science</h2>
          </div>
        </div>

        <div className="pure-g">
          <HomepageTile photo={foodSourcesImage} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={flowerMarketImage} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={magnetImage} chapterNumber={13} title="When do magnets misbehave?" />
          <HomepageTile photo={foodSourcesImage} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={flowerMarketImage} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={magnetImage} chapterNumber={13} title="When do magnets misbehave?" />
          <HomepageTile photo={foodSourcesImage} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={flowerMarketImage} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={magnetImage} chapterNumber={13} title="When do magnets misbehave?" />
          <HomepageTile photo={foodSourcesImage} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={flowerMarketImage} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={magnetImage} chapterNumber={13} title="When do magnets misbehave?" />
          <HomepageTile photo={foodSourcesImage} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={flowerMarketImage} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={magnetImage} chapterNumber={13} title="When do magnets misbehave?" />
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;