import styleConstants from './style-constants.js';
import LoginGate from './login-gate.js';
import intersection from 'lodash/intersection';
import Markdown from './markdown.js';

const MultipleChoiceResponse = React.createClass({
  getInitialState: () => ({}),
  async componentDidMount() {
    this.props.allowSaving();
    this.props.addAfterSaveHook((savePromise) => {
      savePromise.then(this.updateFeedback);
    })
  },
  getDefaultProps: () => ({
    response: [],
    automaticResponses: [],
  }),
  toggleChoice(choice) {
    let selectedChoices = this.props.response || [];
    
    // Deselection
    if (selectedChoices.find(aChoice => aChoice.id === choice.id)) {
      selectedChoices = selectedChoices.filter(aChoice => achoice.id !== choice.id);
    }
    // Selection
    else {
      if (this.props.maxSelected === 1) {
        selectedChoices = [choice];
      } else {
        selectedChoices = selectedChoices.concat(choice);
      }
    }
    this.props.setResponse(selectedChoices);
    this.setState({
      maxMultiselectionReached: this.props.maxSelected > 1 &&
        selectedChoices.length === this.props.maxSelected
    });
  },
  isChoiceSelected(choice) {
    return this.props.response && this.props.response.find(aChoice => aChoice.id === choice.id);
  },
  updateFeedback() {
    const selectedChoices = this.props.response || [];
    const selectedChoiceIds = selectedChoices.map(choice => choice.id);
    
    // Check each automatic response to see if the currently selected choices
    // match any answer set provided. Matching is exact set match, first one found.
    const {response: feedback} = this.props.automaticResponses.find((item) => (
      intersection(selectedChoiceIds, item.answerSet).length === item.answerSet.length
    ));
    
    this.setState({feedback});
  },
  render() {
    return (
      <LoginGate>
        <div className="choices">
          {this.props.choices.map((choice) => (
            <button key={choice.id}
                    disabled={this.state.maxMultiselectionReached && !this.isChoiceSelected(choice.id)}
                    className={'choice' + (this.isChoiceSelected(choice) ? ' selected' : '')}
                    onClick={() => this.toggleChoice(choice)}>
              {choice.text}
            </button>
          ))}
        </div>
        <div className="responses">
          <Markdown source={this.state.feedback} />
        </div>
      </LoginGate>
    );
  }
});

export default MultipleChoiceResponse;