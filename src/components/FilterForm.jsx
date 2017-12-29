import React, { Component } from 'react';
import { math6RP, math6NS, math6EE, math6G, math6SP, math7RP, math7NS, math7EE, math7G, math7SP, math8NS, math8EE, math8F, math8G, math8SP } from '../utils/standards';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
      showingMath6: false,
      showingMath7: false,
      showingMath8: false,
    };
  };

  showOptions(standardsArray, state) {
    if (state) {
      return standardsArray.map(standard => {
        return (
          <div className="standard-checkbox">
            <input type="checkbox" id={standard} name={standard} value={standard}></input>
            <label htmlFor={standard}>{standard}</label>
          </div>
        );
      })
    }
  };

  showMath6Tags(gradeLevel) {
    this.setState({ showingMath6: !this.state.showingMath6 });
  };

  showMath7Tags() {
    this.setState({ showingMath7: !this.state.showingMath7 });
  };

  showMath8Tags() {
    this.setState({ showingMath8: !this.state.showingMath8 });
  };

  render() {
    return (
      <section>
        <h3>Select one or more topics to filter by:</h3>
        <h4>Math 6</h4>
        <button onClick={() => this.showMath6Tags()}>
          Show all tags for grade 6
        </button>
        { this.showOptions(math6RP, this.state.showingMath6) }
        { this.showOptions(math6NS, this.state.showingMath6) }
        { this.showOptions(math6EE, this.state.showingMath6) }
        { this.showOptions(math6G, this.state.showingMath6) }
        { this.showOptions(math6SP, this.state.showingMath6) }

        <h4>Math 7</h4>
        <button onClick={() => this.showMath7Tags()}>
          Show all tags for grade 7
        </button>
        { this.showOptions(math7RP, this.state.showingMath7) }
        { this.showOptions(math7NS, this.state.showingMath7) }
        { this.showOptions(math7EE, this.state.showingMath7) }
        { this.showOptions(math7G, this.state.showingMath7) }
        { this.showOptions(math7SP, this.state.showingMath7) }

        <h4>Math 8</h4>
        <button onClick={() => this.showMath8Tags()}>
          Show all tags for grade 8
        </button>
        { this.showOptions(math8F, this.state.showingMath8) }
        { this.showOptions(math8NS, this.state.showingMath8) }
        { this.showOptions(math8EE, this.state.showingMath8) }
        { this.showOptions(math8G, this.state.showingMath8) }
        { this.showOptions(math8SP, this.state.showingMath8) }
      </section>
    );
  }
}

export default FilterForm;
