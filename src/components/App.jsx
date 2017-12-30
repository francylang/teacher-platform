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
<<<<<<< HEAD
      .then((discussions) => this.setState({ discussions }))
=======
      .then((discussions) => this.setState({
        discussions
      }))
>>>>>>> search
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

  handleSearch() {
    this.fetchDiscussions()
  }

  render() {
    return (
      <section className="app">
        <Header />
        <article className="main">
          <Nav
            handleSearch={this.handleSearch}
            discussions={this.state.discussions}
          />
          <section className="bottom-main">
            <CardContainer discussions={this.state.discussions}/>
          </section>
        </article>
      </section>
    );
  }
}

export default App;
