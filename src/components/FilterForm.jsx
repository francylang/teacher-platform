import React, { Component } from 'react';
import FilterSection from './FilterSection';
import { mathSixStandards, mathSevenStandards, mathEightStandards } from '../utils/standards';

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
      return standardsArray.map((domainArray, i) => {
        return (
          <FilterSection
            domain={domainArray}
            key={i}/>
        );
      })
    }
  };

  showMath6Tags() {
    this.setState({
      showingMath6: true,
      showingMath7: false,
      showingMath8: false,
    });
  };

  showMath7Tags() {
    this.setState({
      showingMath6: false,
      showingMath7: true,
      showingMath8: false,
    });
  };

  showMath8Tags() {
    this.setState({
      showingMath6: false,
      showingMath7: false,
      showingMath8: true,
    });
  };

  render() {
    const { showingMath6, showingMath7, showingMath8 } = this.state;

    return (
      <section>
        <h3>
          Click on a grade level tab to choose standard(s):
        </h3>
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
            { this.showOptions(mathSixStandards, showingMath6) }
          </article>
          <article className="options">
            { this.showOptions(mathSevenStandards, showingMath7) }
          </article>
          <article className="options">
            { this.showOptions(mathEightStandards, showingMath8) }
          </article>
        </section>
        <button>
          FIND discussions based on what I checked!!
        </button>
      </section>
    );
  }
}

export default FilterForm;
