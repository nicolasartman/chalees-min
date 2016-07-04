import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import pify from 'pify';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import LearningItem from './learning-item.js';
import HomePage from './home-page.js';
import Header from './header.js';
import chapters from './chapter-data.js';
import database from './database.js';
import {authorize} from './auth.js';

const Chapter = React.createClass({
  getInitialState: () => ({
    chapterId: null,
    learningItemResponses: {},
    learningItemSaveHandlers: {}
  }),
  componentDidMount: async function () {
    this.setState({
      chapterId: this.props.params.id,
    });
    this.initializeSubscriptions(this.props.params.id)
  },
  async initializeSubscriptions(chapterId) {
    this.databaseReferences = [];
    const currentChapter = chapters.find(chapter => chapter.id === chapterId);
    const user = await authorize();
    if (user) {
      this.databaseReferences = currentChapter.items.map((learningItem) => {
        const ref = database.child('responses')
          .child(`${user.uid}|${currentChapter.id}|${learningItem.id}`);

        const updateLearningItemState = (learningItemId, newLearningItemResponse) => {
          this.setState((state) => {
            state.learningItemResponses[learningItemId] = newLearningItemResponse || null;
            return state;
          });          
        };
        
        // Update the local data whenever it updates in the db
        ref.on('value', (snapshot) => {
          console.log('=======Firebase state update', snapshot.val());
          const updatedLearningItem = snapshot.val();
          updateLearningItemState(updatedLearningItem.itemKey, updatedLearningItem.content)
        }); 
            
        // Create simple save handlers for the items with pre-filled item-specific data
        const saveHandler = (studentResponse) => {
          const payload = {
            userKey: user.uid,
            itemKey: learningItem.id,
            setKey: String(currentChapter.id),
            kind: learningItem.kind,
            content: studentResponse
          }
          const resultPromise = ref.set(payload);

          // Firebase doesn't emit events for the client's own set operations, so we have
          // to do the update manually
          updateLearningItemState(learningItem.id, studentResponse);

          return resultPromise;
        }
        this.setState((previousState) => {
          const newState = previousState;
          newState.learningItemSaveHandlers[learningItem.id] = saveHandler;
        });
        
        return ref;
      });
    }
  },
  componentWillUnmount() {
    this.databaseReferences.map(subscription => subscription.off());
  },
  render() {
    const currentChapter = chapters.find(chapter => chapter.id === this.state.chapterId);
    
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              <h2 style={{textAlign: 'left', margin: '1em 0'}}>
                <strong>Chapter {currentChapter && currentChapter.id}</strong> &ndash; {currentChapter && currentChapter.title}
              </h2>
              {((currentChapter && currentChapter.items) || []).map((item, index) => (
                <LearningItem
                  className={index === 0 && 'first-item'}
                  key={index}
                  response={this.state.learningItemResponses[item.id]} 
                  handleSave={this.state.learningItemSaveHandlers[item.id] || (t => {})}
                  {...item} />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }
});

export default Chapter;