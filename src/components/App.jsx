import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import CardContainer from './CardContainer';
// import { fetchDiscussions } from '../utils/getDiscussions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
    };
    this.fetchDiscussions = this.fetchDiscussions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchDiscussions();
  }

  fetchDiscussions() {
    fetch('http://localhost:3000/api/v1/discussions')
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((discussions) => this.setState({
        discussions
      }))
      .catch((error) => console.error({ error }));
  }

  cleanDiscussions(rawDiscussions) {
    return rawDiscussions.map(discussion => {
      return {
        title: discussion.title,
        body: discussion.body,
        tagId: discussion.tagId,
      };
    });
  }

  handleSearch(discussions) {
    console.log('in handle search');
    this.fetchDiscussions(discussions)
    console.log(discussions);
  }

  render() {
    return (
      <section className="app">
        <Header />
        <section className="main">
          <Nav
            handleSearch={this.handleSearch}
          />
          <CardContainer discussions={this.state.discussions}/>
        </section>
      </section>
    );
  }
}

export default App;
