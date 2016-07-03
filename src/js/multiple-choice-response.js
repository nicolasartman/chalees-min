import styleConstants from './style-constants.js';
import LoginGate from './login-gate.js';
import * as auth from './auth.js';

const MultipleChoiceResponse = React.createClass({
  getInitialState: function() {
    // Keep track of all currently selected child choices
    return {selectedChoices: new Set()};
  },
  componentDidMount: async function () {
    // Only enable the buttons if the user is logged in
    await auth.authorize();
    this.setState({isSignedIn: true});
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
  onSave: function() {
    // data.set({
    //   [this.props.itemId]: this.state.response
    // });
    
    // TODO:
    actions.saveResponse(this.state.response);
    
    // Use fake data
    this.setState({
      saving: true,
      responseSubmitted: true
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
        <div>
            <button className="pure-button" style={{marginTop: 15}} disabled={!this.state.isSignedIn || this.state.saving} onClick={this.onSave}>{this.state.saving ? 'Saving...' : 'Save'}</button>
        </div>
      </div>
    );
  }
});

export default MultipleChoiceResponse;