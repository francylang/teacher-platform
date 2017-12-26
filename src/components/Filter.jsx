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
    return (
      <aside>
        <button onClick={() => this.toggleShowingTags()}>
          Filter
        </button>
        { this.state.showingTags ? this.showTags() : null }
      </aside>
    );
  }
}

export default Filter;
