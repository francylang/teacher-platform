import React, { Component } from 'react';
import { math6RP, math6NS, math6EE, math6G, math6SP, math7RP, math7NS, math7EE, math7G, math7SP, math8NS, math8EE, math8F, math8G, math8SP, mathSix, mathSeven, mathEight } from '../utils/standards';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
      showingMath6: true,
      showingMath7: false,
      showingMath8: false,
    };
  };

  showOptions(standardsArray, state) {
    if (state) {
      return standardsArray.map(standard => {
        let firstChar = standard.charAt(0);
        if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
          return (
            <div className="standard-checkbox" id={firstChar} >
              <input type="checkbox" id={standard} name={standard} value={standard}></input>
              <label htmlFor={standard}>{standard}</label>
            </div>
          );
        } else {
          return (
            <h4>{standard}</h4>
          );
        }
      });
    }
  };

  showMath6Tags() {
    this.setState({ showingMath6: true, showingMath7: false, showingMath8: false });
  };

  showMath7Tags() {
    console.log('show math 7');
    this.setState({ showingMath6: false, showingMath7: true, showingMath8: false });
  };

  showMath8Tags() {
    console.log('show math 8');
    this.setState({ showingMath6: false, showingMath7: false, showingMath8: true });
  };

  render() {
    return (
      <section>
        <h3>Click on a grade level tab to choose standard(s):</h3>
        <button onClick={() => this.showMath6Tags()}>
          Grade 6
        </button>
        <button onClick={() => this.showMath7Tags()}>
          Grade 7
        </button>
        <button onClick={() => this.showMath8Tags()}>
          Grade 8
        </button>
        <section className="options-container">
          <article className="options">
            { this.showOptions(mathSix, this.state.showingMath6) }
          </article>
          <article className="options">
            { this.showOptions(mathSeven, this.state.showingMath7) }
          </article>
          <article className="options">
            { this.showOptions(mathEight, this.state.showingMath8) }
          </article>
        </section>

        <button>FIND discussions based on what I checked!!</button>
      </section>
    );
  }
}

export default FilterForm;
