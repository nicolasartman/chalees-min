import styleConstants from './style-constants.js';
import LoginGate from './login-gate.js';

const MultipleChoiceResponse = React.createClass({
  getInitialState: function() {
    // Keep track of all currently selected child choices
    return {selectedChoices: new Set()};
  },
  toggleChoice: function (choiceId) {
    // Deselection
    if (this.state.selectedChoices.has(choiceId)) {
      // the set state below will pick up this mutative change and ensure it's recognized,
      // since unfortunately the native api works overly mutatively.
      this.state.selectedChoices.delete(choiceId);
    } else {
      if (this.props.maxSelected === 1) {this.state.selectedChoices.clear();}
      this.setState({selectedChoices: this.state.selectedChoices.add(choiceId)});
    }
    this.setState({
      maxMultiselectionReached: this.props.maxSelected > 1 &&
        this.state.selectedChoices.size === this.props.maxSelected
    });
  },
  render: function() {
    return (
      <div>
        <LoginGate>
          <div className="choices">
            {this.props.choices.map((choice) => (
              <button key={choice.id}
                      disabled={this.state.maxMultiselectionReached && !this.state.selectedChoices.has(choice.id)}
                      className={'choice' + (this.state.selectedChoices.has(choice.id) ? ' selected' : '')}
                      onClick={() => this.toggleChoice(choice.id)}>
                {choice.text}
              </button>
            ))}
          </div>
        </LoginGate>
      </div>
    );
  }
});

export default MultipleChoiceResponse;