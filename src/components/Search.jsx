import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <aside className="search-section">
        <label htmlFor="search-input"></label>
        <input type="text" id="search-input" placeholder="Search discussions..." ></input>
      </aside>
    );
  }
}

export default Search;
