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
  }

  componentDidMount() {
    this.fetchDiscussions();
  }

  fetchDiscussions() {
    fetch('http://localhost:3000/api/v1/discussions')
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((discussions) => this.setState({ discussions }))
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

  render() {
    return (
      <section className="app">
        <Header />
        <article className="main">
          <Nav />
          <section className="bottom-main">
            <CardContainer discussions={this.state.discussions}/>
          </section>
        </article>
      </section>
    );
  }
}

export default App;
