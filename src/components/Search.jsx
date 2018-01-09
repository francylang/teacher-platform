import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    const { discussions, renderDiscussions, renderFilteredDiscussions } = this.props;

    let searchTerm = this.state.searchTerm.toLowerCase();

    const filtered = discussions.filter(discussion => {
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

Search.propTypes = {
  discussions: PropTypes.array,
  renderDiscussions: PropTypes.func,
  renderFilteredDiscussions: PropTypes.func,
  handleSearch: PropTypes.func,
};

export default Search;
