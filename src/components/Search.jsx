import React, { Component } from 'react';
import SearchInput, { createFilter } from 'react-search-input';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(searchTerm) {
    const KEYS_TO_FILTERS = ['discussions.title', 'discussions.body'];
    console.log(this.props);
    this.setState({ searchTerm });
    const filteredDiscussions = this.props.discussions.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    this.props.renderFilteredDiscussions(filteredDiscussions);
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const { handleSearch, discussions, renderDiscussions, renderFilteredDiscussions } = this.props;

    return (
      <aside className="search-section">
        <SearchInput className="search-input" onChange={this.searchUpdated} />
      </aside>
    );
  }
}

export default Search;
