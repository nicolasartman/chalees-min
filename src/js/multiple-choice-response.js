import styleConstants from './style-constants.js';
import LoginGate from './login-gate.js';
import {difference} from 'lodash';
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
  toggleResponses: function() {
    const selectedChoicesArray = [...this.state.selectedChoices];
    // Check each automatic response to see if the currently selected choices
    // match any answer set provided
    const responses = this.props.automaticResponses.filter((item) => (
      difference(selectedChoicesArray, item.answerSet).length === 0 &&
      difference(item.answerSet, selectedChoicesArray).length === 0
    )).map((item) => (
      item.response
    ));
    
    this.setState({responses: responses});
  },
  onSave: function() {
    // Modify automatic feedback shown after user submits choices
    this.toggleResponses();
    
    // data.set({
    //   [this.props.itemId]: this.state.response
    // });
    
    // TODO: finish implementing
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
          <div className="responses">
            {this.state.responses}
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