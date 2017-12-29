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
    console.log('fetchDiscussions');
  }

  fetchDiscussions() {
    fetch('http://localhost:3000/api/v1/discussions')
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((discussions) => this.setState({
        discussions
      }, () => console.log(this.state)))
      .catch((error) => console.error({ error }));
  }

  cleanDiscussions(rawDiscussions) {
    return rawDiscussions.map(discussion => {
      // console.log(discussion);
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
        <section className="main">
          <Nav />
          <CardContainer discussions={this.state.discussions}/>
        </section>
      </section>
    );
  }
}

export default App;
