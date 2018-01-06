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
    console.log(this.state);
    this.filterDiscussions();
  }

  filterDiscussions() {
    const filtered = this.props.discussions.filter(dicussion => {
      return dicussion.title.includes(this.state.searchTerm) || dicussion.body.includes(this.state.searchTerm);
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
