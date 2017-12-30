import React, { Component } from 'react';
import FilterForm from './FilterForm';

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      showingTags: false,
    };
  };

  toggleShowingTags() {
    this.setState({ showingTags: !this.state.showingTags });
  };

  showTags() {
    return (
      <FilterForm />
    )
  };

  render() {
    const checkShowTags = this.state.showingTags ? this.showTags() : null;

    return (
      <aside className="filter-section">
        <button
          className="filter-btn"
          onClick={() => this.toggleShowingTags()}>
          <p className="standard-option">Standards</p>
          <div class="down-arrow"></div>
        </button>
        { checkShowTags }
      </aside>
    );
  }
}

export default Filter;
