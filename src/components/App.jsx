import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
import { DEV_URL, PROD_URL } from '../url.js';
// import { fetchDiscussions } from '../utils/getDiscussions.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allDiscussions: [],
      discussions: [],
      comments: [],
      showingDiscussions: false,
      showingForm: true,
      showingStandards: false,
    };
    this.fetchDiscussions = this.fetchDiscussions.bind(this);
    this.renderDiscussions = this.renderDiscussions.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderStandards = this.renderStandards.bind(this);
    this.renderFilteredDiscussions = this.renderFilteredDiscussions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchDiscussions();
    this.fetchComments();
  }

  fetchDiscussions() {
    fetch(`${PROD_URL}/api/v1/discussions`)
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((allDiscussions) => {
        this.setState({ allDiscussions, discussions: allDiscussions })
      })
      .catch((error) => console.error({ error }));
  }

  cleanDiscussions(rawDiscussions) {
    return rawDiscussions.map(discussion => {
      return {
        id: discussion.id,
        title: discussion.title,
        body: discussion.body,
        tagId: discussion.tagId,
      };
    });
  }

  fetchComments() {
    fetch('http://localhost:3000/api/v1/comments')
      .then((response) => response.json())
      .then((comments) => this.cleanComments(comments))
      .then((comments) => this.setState({ comments }))
      .catch((error) => console.error({ error }));
  }

  cleanComments(rawComments) {
    return rawComments.map(comment => {
      return {
        id: comment.id,
        comment: comment.body,
        discussionId: comment.discussionId
      };
    });
  }

  renderDiscussions() {
    this.setState({
      showingDiscussions: true,
      showingForm: false,
      showingStandards: false,
    });
  }

  renderForm() {
    this.setState({
      showingDiscussions: false,
      showingForm: true,
      showingStandards: false,
    });
  }

  renderStandards() {
    this.setState({
      showingDiscussions: false,
      showingForm: false,
      showingStandards: true,
    });
  }

  renderFilteredDiscussions(discussions) {
    this.setState({ discussions });
  }

  handleSearch() {
    this.fetchDiscussions()
  }

  renderCardContainer() {
    if (this.state.showingDiscussions && this.state.discussions) {
      return (
        <CardContainer
          allDiscussions={this.state.allDiscussions}
          discussions={this.state.discussions}
          comments={this.state.comments}
          rendered={this.state.showingDiscussions}/>
      )
    }
  }

  render() {
    const { allDiscussions, discussions, comments, showingDiscussions, showingForm, showingStandards } = this.state;

    // const showDiscussions = showingDiscussions
    //   ? <CardContainer
    //     allDiscussions={allDiscussions}
    //     discussions={discussions}
    //     comments={comments}
    //     rendered={showingDiscussions}/> : null;

    const showForm = showingForm
      ? <DiscussionForm rendered={this.state.showingForm}/> : null;

    const showStandards = showingStandards
      ? <FilterForm
        renderDiscussions={this.renderDiscussions}
        renderFilteredDiscussions={this.renderFilteredDiscussions}
        rendered={this.state.showingStandards}/> : null;

    return (
      <section className="app">
        <Header />
        <article className="main">
          <Nav
            allDiscussions={allDiscussions}
            discussions={discussions}
            renderDiscussions={this.renderDiscussions}
            renderForm={this.renderForm}
            renderStandards={this.renderStandards}
            renderFilteredDiscussions={this.renderFilteredDiscussions}
            handleSearch={this.handleSearch}
          />
          <section className="bottom-main">
            { this.renderCardContainer() }
            { showForm }
            { showStandards }
          </section>
        </article>
      </section>
    );
  }
}

export default App;
