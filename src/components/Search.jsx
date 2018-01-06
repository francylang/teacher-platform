import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
    this.filterDiscussions();
  }

  filterDiscussions() {
    let searchTerm = this.state.searchTerm.toLowerCase();

    const filtered = this.props.allDiscussions.filter(discussion => {
      let title = discussion.title.toLowerCase();
      let body = discussion.body.toLowerCase();

      if (title.includes(searchTerm) || body.includes(searchTerm)) {
        return discussion;
      }
    });

    this.props.renderDiscussions();
    this.props.renderFilteredDiscussions(filtered);
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const { handleSearch, discussions, renderDiscussions, renderFilteredDiscussions } = this.props;

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
  }
}

export default Search;
