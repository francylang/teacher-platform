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
      <aside>
        <button onClick={() => this.toggleShowingTags()}>
          Filter
        </button>
        { checkShowTags }
      </aside>
    );
  }
}

export default Filter;
