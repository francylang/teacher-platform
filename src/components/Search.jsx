import React, { Component } from 'react';
import Trie from '../utils/Trie';
// import discussion database

class Search extends Component {
  constructor() {
    super();
    this.trie = {};

    this.state = {
      userInput: '',
      suggestions: []
    }
    this.trie = new Trie()
    // this.trie.populate()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('handleChange');
    // const keywordSuggestions = this.trie.suggest(event.target.value)
    this.setState({
      userInput: event.target.value,
      suggestions: []
    });
  }

  handleClick() {
    console.log('in handle click');
    this.props.handleSearch();
  }
  // onChange search discussion database
  // set state - userInput = event.target, suggestions = stuff from database that has the same letters

  render() {
    const { handleSearch } = this.props;

    return (
      <aside>
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Search for a topic"
        />
        <button onClick={this.handleClick}></button>
      </aside>
    );
  }
}

export default Search;
