import Markdown from 'react-markdown';
import identity from 'lodash/identity';
import cond from 'lodash/cond';

// The different types of learning item widgets
import MultipleChoiceResponse from './multiple-choice-response.js';
import VideoInstruction from './video-instruction.js';
import TextResponse from './text-response.js';
import ImageResponse from './image-response.js';
import ImageContent from './image-content.js';

import styleConstants from './style-constants.js';

const kinds = {
  'multipleChoice': MultipleChoiceResponse,
  'video': VideoInstruction,
  'textResponse': TextResponse,
  'imageResponse': ImageResponse,
  'image': ImageContent
};

// Render all links from markdown so they open in a new window so the learner
// doesn't potentially lose progress
const linkRenderer = (linkNode) => {
  return <a href={linkNode.href} title={linkNode.title}
            target="_blank" children={linkNode.children} />;
}

const LearningItem = React.createClass({
  propTypes: {
    handleSave: React.PropTypes.func.isRequired,
  },
  getInitialState: () => ({
    response: null,
    saveIsEnabled: true,
    saveButtonLabel: 'Save',
  }),
  componentWillReceiveProps(newProps) {
    this.setState({response: newProps.response});
  },
  setResponse(response) {
    this.setState({response});
  },
  enableSave() {
    this.setState({saveIsEnabled: true});
  },
  disableSave() {    
    this.setState({saveIsEnabled: false});
  },
  setSaveButtonLabel(saveButtonLabel) {
    this.setState({saveButtonLabel});
  },
  setAllowSaving() {
    this.setState({shouldAllowSaving: true});
  },
  addBeforeSaveHook(handler) {
    this.setState({handleBeforeSaveAction: handler});
  },
  addAfterSaveHook(handler) {
    this.setState({handleAfterSave: handler});
  },
  displaySaveResultMessage(recentSaveStatus) {
    window.clearTimeout(this.saveResultMessageTimeout);
    this.setState({recentSaveStatus});
    this.saveResultMessageTimeout = window.setTimeout(
      () => this.setState({recentSaveStatus: null}), 2500);
  },
  handleSave() {
    this.disableSave();
    this.setState({recentSaveStatus: null});

    const createSaveCompletionHandler = (saveStatus) => (result) => {
      this.enableSave();
      this.setSaveButtonLabel('Save');
      this.displaySaveResultMessage(saveStatus);
      
      if (saveStatus === 'failure' && result) {
        console.error('Save failed with error', result);
        return Promise.reject(result);
      } else {
        return result;
      }
    };
    
    const handleBeforeSaveAction = this.state.handleBeforeSaveAction || identity;
    const handleAfterSave = this.state.handleAfterSave || identity;
    
    // If a before-save hook was provided and returned a result, use that as the
    // new response and update the state to match, else use the current state.response
    // value
    const savePromise = Promise.resolve(handleBeforeSaveAction())
      .then((beforeSaveHookResult) => {
        this.setSaveButtonLabel('Saving...');
        if (beforeSaveHookResult) {
          this.setState({response: beforeSaveHookResult})
        }
        return this.props.handleSave(beforeSaveHookResult || this.state.response);
      })
      .then(createSaveCompletionHandler('success'), createSaveCompletionHandler('failure'));
    
    // Allow learning items to run additional processing in response to the save completing
    handleAfterSave(savePromise);
  },
  render() {
    const props = this.props;
    const Child = kinds[props.kind];
    const content = Child ? (
      <Child
        {...props}
        enableSave={this.enableSave}
        disableSave={this.disableSave}
        setResponse={this.setResponse}
        allowSaving={this.setAllowSaving}
        setSaveStatusMessage={this.setSaveButtonLabel}
        addBeforeSaveHook={this.addBeforeSaveHook}
        addAfterSaveHook={this.addAfterSaveHook}
        response={this.state.response} />
    ) : props.children;
    
    const presenterImageUrl = 'https://chalees-min.imgix.net' +
      props.presenterImagePath + '?w=34&h=34&auto=format&mask=ellipse';

    return (
      <div className="learning-item">
        <div style={{width: '100%'}}>
          <div className="learning-item-header">
            {props.presenterImagePath ? (
              <img style={{marginRight: 15, width: 'auto', height: '100%', minWidth: 34}} src={presenterImageUrl} srcSet={presenterImageUrl + '&dpr=2 2x'} />
            ) : null}
            <div style={{width: '100%'}}>
              <h3 style={{margin: 0}}>{props.title}</h3>
            </div>
            <div className="learning-item-time">
              <div style={{fontWeight: 'bold', marginRight: '0.25em'}}>
                {props.time}
              </div>
              <div>
                Min
              </div>
            </div>
          </div>
          <Markdown source={props.instructions || ''} renderers={{'Link': linkRenderer}}/>
          {content}
          {this.state.shouldAllowSaving && (<div style={{marginTop: 15}} className="content-vertical-center">
              <button
                className="pure-button"
                disabled={!this.state.saveIsEnabled /* TODO: add login criteria */}
                onClick={this.handleSave}
              >
                {this.state.saveButtonLabel}
              </button>
              <span style={{marginLeft: '15px'}}>
                {cond([
                  [() => !this.state.recentSaveStatus, () => null],
                  [() => this.state.recentSaveStatus === 'success', () => (
                    <span>Saved successfully!</span>
                  )],
                  [() => this.state.recentSaveStatus === 'failure', () => (
                    <span>Save failed, please try again.</span>
                  )],
                ])()}
              </span>
          </div>)}
        </div>
      </div>
    );
    
    // TODO
    // {cond([
    //   [() => !this.props.hacks || !this.state.responseSubmitted, () => null],
    //   [() => this.props.hacks.wordCloudImagePath,
    //     () => createFakeWordCloudResponse(this.props.hacks.wordCloudImagePath)],
    //   [() => this.props.hacks.fakePeerResponses,
    //     () => createFakePeerResponses(this.props.hacks.fakePeerResponses)],
    // ])()}
    //
  },
});

export default LearningItem;