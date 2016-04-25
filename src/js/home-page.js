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
          <HomepageTile photo={chapter1Image} chapterNumber={1} title="Food: Where Does It Come From?" />
          <HomepageTile photo={chapter2Image} chapterNumber={2} title="Components Of Food" />
          <HomepageTile photo={chapter3Image} chapterNumber={3} title="Fibre To Fabric" />
          <HomepageTile photo={chapter5Image} chapterNumber={5} title="Separation of Substances" />
          <HomepageTile photo={chapter6Image} chapterNumber={6} title="Changes Around Us" />
          <HomepageTile photo={chapter7Image} chapterNumber={7} title="Getting To Know Plants" />
          <HomepageTile photo={chapter11Image} chapterNumber={11} title="Lights, Shadows And Reflections" />
          <HomepageTile photo={chapter13Image} chapterNumber={13} title="Fun With Magnets" />
          <HomepageTile photo={chapter14Image} chapterNumber={14} title="Water" />
          <HomepageTile photo={chapter16Image} chapterNumber={16} title="Garbage In, Garbage Out" />
        </div>
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;