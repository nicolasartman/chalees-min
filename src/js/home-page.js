import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';
import UserMenu from './user-menu.js';
import Footer from './footer.js';
import {chapter6Data, chapter7Data} from './chapter-data.js';
import sortBy from 'lodash/sortBy';
import logo from '../images/chalees-min-logo@2x.png';
import cameraIcon from '../images/icons/camera-icon.png';


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
  getInitialState: () => ({}),
  
  render: function() {
    return (
      <div className="homepage">
        <div className="homepage-background-hack" />
        {/* Wrapping this in main-nav is a dirty hack, but we're rewriting everything so this is a special exception hack */}
        <nav className="home-menu pure-menu pure-menu-horizontal main-nav home-nav">
          <UserMenu />
        </nav>
        
        <div className={`homepage-banner-area ${(this.state.grade6 || this.state.grade7) ? 'open' : ''}`}>
          <div className="homepage-title-primary">
            <img src={logo} className="homepage-logo" />
          </div>
          <div className="homepage-title-secondary">
            Science lessons in 40 minutes or less
          </div>
          <div className="homepage-grade-choices">
            <button onClick={() => this.setState({grade7: false, grade6: true})} className={`pure-button ${this.state.grade6 ? 'active' : ''}`} style={{marginRight: 20}}>
              Grade 6 Science
            </button>
            <button onClick={() => this.setState({grade7: true, grade6: false})} className={`pure-button ${this.state.grade7 ? 'active' : ''}`}>
              Grade 7 Science
            </button>
          </div>
          {<a href="somewhere" className={"live-banner " + (this.state.grade6 || this.state.grade7 ? 'live-banner-invisible' : '')}>
            <img src={cameraIcon} style={{position: 'relative', top: 3, marginRight: 7}}/>
            Live Class, Every Saturday at 12PM
          </a>}
        </div>      
        
        <div className={`homepage-grade-section ${(this.state.grade6 || this.state.grade7) ? 'homepage-grade-section-visible' : 'homepage-grade-section-invisible'}`}>
          <div className="container homepage-grade-section-body">
            <div className={`pure-g ${this.state.grade6 ? 'selected-chapter' : 'not-selected-chapter'}`}>
              {chapter6Lessons.map((chapter, index) => (
                <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title} />
              ))}
            </div>
        
            <div className={`pure-g ${this.state.grade7 ? 'selected-chapter' : 'not-selected-chapter'}`}>
              {chapter7Lessons.map((chapter, index) => (
                <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title} />
              ))}
            </div>
          </div>
        </div>
        {this.props.children}
        
        <Footer className={!(this.state.grade6 || this.state.grade7) ? 'homepage-footer' : 'homepage-footer-open'} />
      </div>
    );
  }
});

export default HomePage;
