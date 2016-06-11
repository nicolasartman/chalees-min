import React from 'react';
import styleConstants from './style-constants.js';

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

const Choice = React.createClass({
  getInitialState: function() {
    return {selected: false};
  },
  onSelect: function() {
    // Toggle between "selected" and "unselected"
    this.setState({selected: !this.state.selected})
  },
  render: function() {
    return (
      <li>
      {/* TODO: change unicode checkmark character to a glyph? */}
      <button style={this.state.selected ? selectedChoiceStyle : unselectedChoiceStyle} 
              onClick={this.props.onSelect}>{this.props.choice + (this.state.selected ? ' \u2713' : '')}</button>
      </li>
    )
  }
})

const MultipleChoiceResponse = React.createClass({
  getInitialState: function() {
    // Keep track of all currently selected child choices
    return {selected: []};
  },
  onSelect: function(choice) {
    let selected = this.state.selected;
    const index = selected.indexOf(choice);
    if (index > -1) {
      // The chosen option is already selected, so remove it to de-select it
      selected.splice(index, 1);
    } else {
      // The chosen option is not already selected, so add it as the most recently selected choice
      selected.push(choice);
      if (selected.length > this.props.maxSelected) {
        // Remove the least-recently added choice if we've reached quota
        const removedChoice = selected.splice(0, 1);
        // De-select the just-removed choice on the client
        this.refs['choice' + removedChoice[0]].onSelect();
      }
    }
    // Apply (de-)selection to the child choice on the client
    this.refs['choice' + choice].onSelect();
    this.setState({selected: selected});
  },
  render: function() {
    return (
      <ol>
        {this.props.choices.map(function(choice, index) {
          const onSelectBound = this.onSelect.bind(this, index);
          return (
            <Choice key={'choice-' + index}
                    ref={'choice' + index}
                    choice={choice} 
                    onSelect={onSelectBound} />
          );
        }.bind(this))}
      </ol>
    );
  }
});

export default MultipleChoiceResponse;