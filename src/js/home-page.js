import { Link } from 'react-router';
import HomepageTile from './homepage-tile.js';
import UserMenu from './user-menu.js';
import Footer from './footer.js';
import {chapter6Data, chapter7Data} from './chapter-data';
import {categories as englishData} from './chapter-data/englishData';
import sortBy from 'lodash/sortBy';
import logo from '../images/chalees-min-logo@2x.png';
import cameraIcon from '../images/icons/camera-icon.png';


// Clone the chapters since sort mutates the array
const getLessons = (chapterData) => sortBy(
  [...chapterData].filter(chapter => !chapter.hidden),
  chapter => parseInt(chapter.id, 10)
);

const grades = [{
  key: 'grade6',
  title: 'Grade 6 Science',
  data: chapter6Data
}, {
  key: 'grade7',
  title: 'Grade 7 Science',
  data: chapter7Data
}, {
  key: 'english',
  title: 'English - अंग्रेज़ी',
  data: englishData
}]

const HomePage = React.createClass({
  getInitialState: () => ({}),

  render: function() {
    const { currentGrade } = this.state
    const currentLessons = currentGrade
      ? getLessons(grades.find(grade => grade.key === currentGrade).data)
      : []

    return (
      <div className="homepage">
        <div className="homepage-background-hack" />
        {/* Wrapping this in main-nav is a dirty hack, but we're rewriting everything so this is a special exception hack */}
        <nav className="home-menu pure-menu pure-menu-horizontal main-nav home-nav">
          <UserMenu />
        </nav>

        <div className={`homepage-banner-area ${currentGrade ? 'open' : ''}`}>
          <div className="homepage-title-primary">
            <img src={logo} className="homepage-logo" />
          </div>
          <div className="homepage-title-secondary">
            Learn new things in 40 min or less
          </div>
          <div className="homepage-grade-choices">
            {grades.map(grade => (
              <button
                key={grade.key}
                onClick={() => this.setState({currentGrade: grade.key})}
                className={`pure-button ${currentGrade === grade.key ? 'active' : ''}`}
                children={grade.title}
              />
            ))}
          </div>
          {/*
          <a target="_blank" href="https://meet.google.com/udp-uepj-vru" className={"live-banner " + (this.state.grade6 || this.state.grade7 ? 'live-banner-invisible' : '')}>
            <img src={cameraIcon} style={{position: 'relative', top: 3, marginRight: 7}}/>
            Live Class Today at 12PM!
          </a>
          */}
        </div>

        <div className={`homepage-grade-section ${currentGrade ? 'homepage-grade-section-visible' : 'homepage-grade-section-invisible'}`}>
          {currentGrade &&
            <div className="container homepage-grade-section-body">
              <div className={`pure-g ${currentGrade ? 'selected-chapter' : 'not-selected-chapter'}`}>
                {currentLessons.map((chapter, index) => (
                  <HomepageTile key={index} imagePath={chapter.thumbnailImagePath} chapterId={chapter.id} title={chapter.title}
                    linkPath={`/${chapter.belongsTo ? chapter.belongsTo : 'chapter'}/${chapter.id}`}
                    hideId={!!chapter.belongsTo}
                  />
                ))}
              </div>
            </div>
          }
        </div>
        {this.props.children}

        <Footer className={currentGrade ? 'homepage-footer-open' : 'homepage-footer'} />
      </div>
    );
  }
});

export default HomePage;
