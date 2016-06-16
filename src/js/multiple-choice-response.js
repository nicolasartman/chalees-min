import React from 'react';
import styleConstants from './style-constants.js';
import selectedIcon from '../images/icons/multiple-choice-selected.svg';
import notSelectedIcon from '../images/icons/multiple-choice-not-selected.svg';


const unselectedChoiceStyle = {
  backgroundColor: 'transparent',
  outline: 'none'
};

const selectedChoiceStyle = {
  color: styleConstants.chaleesPurple,
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  outline: 'none'
}

const MultipleChoiceResponse = React.createClass({
  getInitialState: function() {
    // Keep track of all currently selected child choices
    return {selectedChoices: new Set()};
  },
  toggleChoice: function (choiceIndex) {
    // Deselection
    if (this.state.selectedChoices.has(choiceIndex)) {
      // the set state below will pick up this mutative change and ensure it's recognized,
      // since unfortunately the native api works overly mutatively.
      this.state.selectedChoices.delete(choiceIndex);
    } else {
      if (this.props.maxSelected === 1) {this.state.selectedChoices.clear();}
      this.setState({selectedChoices: this.state.selectedChoices.add(choiceIndex)});
    }
    this.setState({
      maxMultiselectionReached: this.props.maxSelected > 1 &&
        this.state.selectedChoices.size === this.props.maxSelected
    });
  },
  render: function() {
    return (
      <div className="choices">
        {this.props.choices.map((choice, index) => (
          <button key={index}
                  disabled={this.state.maxMultiselectionReached && !this.state.selectedChoices.has(index)}
                  className={'choice' + (this.state.selectedChoices.has(index) ? ' selected' : '')}
                  onClick={() => this.toggleChoice(index)}>
            {choice}
          </button>
        ))}
      </div>
    );
  }
});

export default MultipleChoiceResponse;