import { Link } from 'react-router';

export default (props) => (
  <div className="pure-u-1 pure-u-sm-1-2 pure-u-md-1-3 pure-u-lg-1-3 pure-u-xl-1-3 homepage-tile">
    <div className="homepage-tile-content">
      <Link to={props.linkPath}>
        <div className="homepage-tile-picture-container">
          <img className="homepage-tile-picture pure-img" src={'https://chalees-min.imgix.net' + props.imagePath + '?w=550&h=309&fit=crop&auto=format,compress'} />
          <div className="homepage-tile-title">
            {props.title}
          </div>
        </div>
        {!props.hideId &&
          <div className="homepage-tile-chapter-number">Chapter {props.chapterId}</div>
        }
      </Link>
    </div>
  </div>
)