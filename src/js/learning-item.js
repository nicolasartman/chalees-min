import identity from 'lodash/identity';
import cond from 'lodash/fp/cond';
import Markdown from './markdown';
import getIn from 'lodash/get';
import classNames from 'classnames'

import {authorize} from './auth.js';

// The different types of learning item widgets
import MultipleChoiceResponse from './multiple-choice-response.js';
import VideoInstruction from './video-instruction.js';
import TextResponse from './text-response.js';
import ImageResponse from './image-response.js';
import ImageContent from './image-content.js';
import ImageSelect from './image-select.js';
import HackFeedback from './hack-feedback.js';
import lockIcon from '../images/icons/lock-icon.svg';
import lockIconInverse from '../images/icons/lock-icon-inverse.svg';

const kinds = {
  'multipleChoiceResponse': MultipleChoiceResponse,
  'video': VideoInstruction,
  'textResponse': TextResponse,
  'imageResponse': ImageResponse,
  'image': ImageContent,
  'imageSelect': ImageSelect
};

const LearningItem = React.createClass({
  propTypes: {
    handleSave: React.PropTypes.func.isRequired,
  },
  getInitialState: () => ({
    userIsSignedIn: false,
    response: null,
    saveIsEnabled: true,
    saveButtonLabel: 'Save',
    showTimerOverlay: false
  }),
  componentWillReceiveProps({ response }) {
    if (response) {
      this.setState({ response, showTimerOverlay: false });
    }
  },
  async componentWillMount() {
    const { props: { isTimed, response } } = this;
    if (response) {
      this.setState({ showTimerOverlay: false });
    }

    const user = await authorize();
    if (user) {
      this.setState({userIsSignedIn: true});
      if (!isNaN(isTimed)) {
        this.setState({ showTimerOverlay: true });
      }
    }
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
  handleSaveFinish() {
    this.enableSave();
    this.setSaveButtonLabel('Save');
  },
  handleSaveSuccess(result) {
    this.handleSaveFinish();
    this.displaySaveResultMessage('success');
    return result;
  },
  handleSaveFailure(error) {
    console.warn('Save failed with error', error);
    this.handleSaveFinish();
    this.displaySaveResultMessage(error);
    return Promise.reject(error);
  },
  handleSave() {
    this.disableSave();
    this.setState({recentSaveStatus: null});
    this.disableTimer();

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
      .then(result => this.handleSaveSuccess(result), error => this.handleSaveFailure(error));

    // Allow learning items to run additional processing in response to the save completing
    Promise.resolve(handleAfterSave(savePromise)).then(() => {}, () => {});
  },
  createHackFeedback(data, response) {
    const showBehavior = data && data.show;

    return cond([
      [() => showBehavior === 'ifResponse' && response, () => (
          <HackFeedback data={this.props.hacks.afterBody} />
      )],
      [() => showBehavior === 'locked', () => (
        <div className={response ? '' : 'hack-feedback-lock'}>
          <HackFeedback data={data} />
          <div className="hack-feedback-lock-fader">
            <img src={lockIcon} aria-hidden style={{height: '1em', position: 'relative', top: 2, left: -5}}/>
            Answer this quiz to see more
          </div>
        </div>
      )],
      [() => data && !showBehavior, () => (
          <HackFeedback data={data} />
      )],
    ])();
  },
  startTimer() {
    const { props: { isTimed } } = this;
    this.setState({
      timeRemaining: parseInt(isTimed, 10),
      retryItem: true,
      showTimerOverlay: false,
      showTimeRemaining: true
    });
    this.itemTimeout = window.setInterval(this.updateTimer, 1000);
  },
  updateTimer() {
    const timeRemaining = this.state.timeRemaining - 1;

    if (timeRemaining > 0) {
      this.setState({ timeRemaining });
    } else {
      this.setState({
        showTimerOverlay: true,
        showTimeRemaining: false
      });
      window.clearInterval(this.itemTimeout);
    }
  },
  disableTimer() {
    window.clearInterval(this.itemTimeout);
    this.setState({
      showTimeRemaining: false
    })
  },
  render() {
    const {
      props,
      state: {
        showTimerOverlay,
        retryItem,
        showTimeRemaining,
        timeRemaining
      }
    } = this;
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
      <div className={`learning-item ${this.props.className || ''}`}>
        <div style={{width: '100%'}}>
          <div className="learning-item-section">
            {/* Header and instructions */}
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
            <div style={{position: 'relative'}}>
              { showTimerOverlay &&
                <div className="learning-item-timer-overlay">
                  <div>
                    { retryItem ?
                      <p>
                        Time is up. Click restart to play again.
                      </p>
                      :
                      <p>
                        You will have {props.isTimed} seconds to answer this question.
                        Click start when ready.
                      </p>
                    }
                    <p>
                      <button
                        className="pure-button"
                        children={retryItem ? "Restart" : "Start"}
                        onClick={this.startTimer}
                      />
                    </p>
                  </div>
                </div>
              }
              { showTimeRemaining &&
                <p style={{textAlign:'right'}}>
                  Time Remaining:
                  <span className={classNames('timer-seconds-remaining', { 'flash-red': timeRemaining < 11 })}>
                    {timeRemaining} seconds
                  </span>
                </p>
              }
              <Markdown source={props.instructions} />

              <div className="hack-feedback-container hack-feedback-before-body">
                {this.createHackFeedback(this.props.hacks && this.props.hacks.beforeBody, this.props.response)}
              </div>

              {/* Learning item body */}
              {content}

              {/* Save button */}
              {this.state.shouldAllowSaving && (<div style={{marginTop: 15}} className="content-vertical-center">
                <button
                  className="pure-button"
                  disabled={!this.state.userIsSignedIn || !this.state.saveIsEnabled}
                  onClick={this.handleSave}
                >
                  {this.state.saveButtonLabel}
                </button>
                <span style={{marginLeft: '15px'}}>
                  {cond([
                    [() => !this.state.recentSaveStatus, () => null],
                    [() => this.state.recentSaveStatus === 'success', () => (
                      <span className="text-success">Saved successfully!</span>
                    )],
                    [() => this.state.recentSaveStatus.code === 'NO_RESPONSE_GIVEN', () => (
                      <span className="text-error">Please make sure to provide a response</span>
                    )],
                    [() => this.state.recentSaveStatus, () => (
                      <span className="text-error">Save failed, please try again</span>
                    )],
                  ])()}
                </span>
              </div>)}
            </div>
          </div>

          <div className="hack-feedback-container hack-feedback-after-body">
            {this.createHackFeedback(this.props.hacks && this.props.hacks.afterBody, this.props.response)}
          </div>
        </div>
        {this.props.locked && !this.props.isChapterComplete && (
          <div className="learning-item-lock content-center">
            <div className="learning-item-lock-message">
              <img src={lockIconInverse} aria-hidden style={{height: '2em', position: 'relative', marginBottom: '0.5em'}}/>
              <br />
              Answer all of the questions in this chapter to view!
            </div>
          </div>
        )}
      </div>
    );
  },
});

export default LearningItem;