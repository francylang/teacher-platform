import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
    this.filterDiscussions();
  };

  filterDiscussions() {
    const { discussions, filteredDiscussions, renderDiscussions, renderFilteredDiscussions } = this.props;

    let searchTerm = this.state.searchTerm.toLowerCase();

    const filtered = filteredDiscussions.filter(discussion => {
      let title = discussion.title.toLowerCase();
      let body = discussion.body.toLowerCase();
      if (title.includes(searchTerm) || body.includes(searchTerm)) {
        return discussion;
      };
    });
    renderDiscussions();
    renderFilteredDiscussions(filtered);
  };

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  };

  render() {
    const { renderDiscussions, renderFilteredDiscussions, handleSearch } = this.props;
    return (
      <aside className="search-section">
        <label htmlFor="search-input"></label>
        <input
          onChange={this.handleChange.bind(this)}
          type="text"
          id="search-input"
          placeholder="Search discussions..."
        >
        </input>
      </aside>
    );
  };
};

export default Search;
