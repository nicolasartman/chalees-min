import { Link } from "react-router";
import Helmet from "react-helmet";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { categories, getCategoryData } from "./chapter-data";
import HomepageTile from "./homepage-tile";

function Category(props) {
  const { categoryId } = props.params;
  const category = categories.find(category => category.id === categoryId);
  const currentLessons = category ? getCategoryData(categoryId) : [];

  return (
    <main id="category" className="container homepage-grade-section">
      <Helmet>
        <meta
          name="description"
          content={category ? category.description : ""}
        />
        <title>
          {category ? (
            category.title + " - Chalees Min School"
          ) : (
            "Chalees Min School"
          )}
        </title>
      </Helmet>
      <div className="container homepage-grade-section-body">
        <div className="pure-g">
          <div className="pure-u-1">
            <h2 className="chapter-title">
              <strong>Category</strong> &ndash; {category && category.title}
            </h2>
            <ReactCSSTransitionGroup
              component="div"
              transitionName="fade-switch"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {currentLessons.map((chapter, index) => (
                <HomepageTile
                  key={index}
                  imagePath={chapter.thumbnailImagePath}
                  chapterId={chapter.id}
                  title={chapter.title}
                  linkPath={`/${chapter.belongsTo
                    ? chapter.belongsTo
                    : "chapter"}/${chapter.id}`}
                  hideId
                />
              ))}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Category;