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

  mapTitleBody() {
    let titlesBodies = []
    return this.props.discussions.map(discussion => {
      titlesBodies.push(discussion.title, discussion.body)
      console.log(titlesBodies);
      return titlesBodies
    })
  }

  searchUpdated(term) {
    this.setState({
      searchTerm: term
    })
  }

  render() {
    this.mapTitleBody()
    const { handleSearch, discussions } = this.props;

    return (
      <aside className="search-section">
        <label htmlFor="search-input"></label>
        <input
          type="text"
          id="search-input"
          placeholder="Search discussions..."
        >
        </input>
        <button
          discussions={discussions}
          className="search-btn"
        >
        </button>
      </aside>
    );
  }
}

export default Search;
