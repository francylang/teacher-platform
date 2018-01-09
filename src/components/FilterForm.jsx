import React, { Component } from 'react';
import FilterSection from './FilterSection';
import { mathSixStandards, mathSevenStandards, mathEightStandards } from '../utils/standards';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      showingMath6: true,
      showingMath7: false,
      showingMath8: false,
    };
  };

  showOptions(standardsArray, state) {
    const { renderDiscussions, renderFilteredDiscussions, discussions } = this.props;

    if (state) {
      return standardsArray.map((domainArray, i) => {
        return (
          <FilterSection
            renderDiscussions={renderDiscussions}
            renderFilteredDiscussions={renderFilteredDiscussions}
            domain={domainArray}
            discussions={discussions}
            key={domainArray[i]}/>
        );
      });
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
      <section className="filter-section">
        <article className="grade-btn-container">
          <button
            onClick={() => this.showMath6Tags()}
            className="grade-btn grade-selected">
            Grade 6
          </button>
          <button
            onClick={() => this.showMath7Tags()}
            className="grade-btn">
            Grade 7
          </button>
          <button
            onClick={() => this.showMath8Tags()}
            className="grade-btn">
            Grade 8
          </button>
        </article>
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
      </section>
    );
  }
}

export default FilterForm;
