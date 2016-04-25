import React from 'react';
import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';

// Images
import chapter1Image from '../images/Chapter 1 Thumbnail.jpg';
import chapter2Image from '../images/Chapter 2 Thumbnail.jpg';
import chapter3Image from '../images/Chapter 3 Thumbnail.jpg';
import chapter5Image from '../images/Chapter 5 Thumbnail.jpg';
import chapter6Image from '../images/Chapter 6 Thumbnail.jpg';
import chapter7Image from '../images/Chapter 7 Thumbnail.jpg';
import chapter11Image from '../images/Chapter 11 Thumbnail.jpg';
import chapter13Image from '../images/Chapter 13 Thumbnail.jpg';
import chapter14Image from '../images/Chapter 14 Thumbnail.jpg';
import chapter16Image from '../images/Chapter 16 Thumbnail.jpg';

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
          <HomepageTile photo={chapter1Image} chapterNumber={1} title="Where does food come from?" />
          <HomepageTile photo={chapter2Image} chapterNumber={2} title="What is food made up of?" />
          <HomepageTile photo={chapter3Image} chapterNumber={3} title="Learning to Knit a Scarf with Peg" />
          <HomepageTile photo={chapter5Image} chapterNumber={5} title="How does salt dissolve in water?" />
          <HomepageTile photo={chapter6Image} chapterNumber={6} title="The train track behind Facebook's office" />
          <HomepageTile photo={chapter7Image} chapterNumber={7} title="Why do plants produce flowers?" />
          <HomepageTile photo={chapter11Image} chapterNumber={11} title="Can shadows be colorful?" />
          <HomepageTile photo={chapter13Image} chapterNumber={13} title="When do magnets misbehave?" />
          <HomepageTile photo={chapter14Image} chapterNumber={14} title="How to convert seawater into drinking water" />
          <HomepageTile photo={chapter16Image} chapterNumber={16} title="Landfill in Hawaii and New Delhi" />
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;