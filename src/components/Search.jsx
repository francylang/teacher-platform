import React, { Component } from 'react';
import Trie from '../utils/Trie';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      suggestions: []
    }

    this.trie = {};

    this.trie = new Trie()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const keywordSuggestions = this.trie.suggest(event.target.value);
    this.setState({
      userInput: event.target.value,
      suggestions: keywordSuggestions
    });
  }

  handleClick() {
    this.props.handleSearch(this.state.userInput);
  }

  render() {
    const { handleSearch, discussions } = this.props;

    this.trie.populate(discussions);

    return (
      <aside className="search-section">
        <label htmlFor="search-input"></label>
        <input
          onChange={this.handleChange}
          type="text"
          id="search-input"
          placeholder="Search discussions..."
        >
        </input>
        <button
          onClick={this.handleClick}
          discussions={discussions}
          className="search-btn"
        >
        </button>
      </aside>
    );
  }
}

export default Search;
