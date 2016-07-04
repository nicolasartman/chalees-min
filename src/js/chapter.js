import ReactDom from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import pify from 'pify';
import ImageResponse from './image-response.js';
import TextResponse from './text-response.js';
import VideoInstruction from './video-instruction.js';
import LearningItem from './learning-item.js';
import HomePage from './home-page.js';
import Header from './header.js';
import * as data from './data.js';
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
    const chapterNumber = parseInt(this.props.params.id, 10)
    this.setState({
      chapterId: chapterNumber,
    });
    this.initializeSubscriptions(chapterNumber)
  },
  async initializeSubscriptions(chapterId) {
    this.databaseReferences = [];
    const currentChapter = chapters.find(chapter => chapter.number === chapterId);
    const user = await authorize();
    if (user) {
      this.databaseReferences = currentChapter.items.map((learningItem) => {
        const ref = database.child('responses').child(`${user.uid}|${learningItem.id}`)

        // Update the local data whenever it updates in the db
        ref.on('value', (snapshot) => {
          console.log('=======Firebase state update', snapshot.val());
          this.setState((state) => {
            const {content: learningItemResponse} = snapshot.val();
            state.learningItemResponses[learningItem.id] = learningItemResponse || null;
            return state;
          })         
        }); 
            
        // Create simple save handlers for the items with pre-filled item-specific data
        const saveHandler = studentResponse => {
          const payload = {
            userKey: user.uid,
            itemKey: learningItem.id,
            setKey: String(currentChapter.number),
            kind: learningItem.kind,
            content: studentResponse
          }
          console.log('firebase payload:', payload);
          return ref.set(payload);
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
    const currentChapter = chapters.find(chapter => chapter.number === this.state.chapterId);
    
    return (
      <div>
        <main id="main" className="container chapter">
          <div className="pure-g">
            <div className="pure-u-1">
              <h2 style={{textAlign: 'center', marginTop: '2em'}}>
                Chapter {currentChapter && currentChapter.number}: {currentChapter && currentChapter.title}
              </h2>
              {((currentChapter && currentChapter.items) || []).map((item, index) => (
                <LearningItem
                  key={index} 
                  response={this.state.learningItemResponses[item.id]} 
                  handleSave={this.state.learningItemSaveHandlers[item.id] || (t => {})}
                  {...item}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }
});

export default Chapter;