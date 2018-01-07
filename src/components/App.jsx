import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
import userLoginData from '../utils/userLoginData';
import { Redirect } from 'react-router';
import { PROD_URL } from '../url.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allDiscussions: [],
      discussions: [],
      comments: [],
      showingDiscussions: true,
      showingForm: false,
      showingStandards: false,
      isAuthenticated: false
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
    fetch(`http://localhost:3000/api/v1/discussions`)
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((allDiscussions) => {
        this.setState({ allDiscussions, discussions: allDiscussions });
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
        tagTitle: discussion.tagTitle,
      };
    });
  }

  fetchComments() {
    fetch(`http://localhost:3000/api/v1/comments`)
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
      discussions: this.state.allDiscussions,
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
    this.fetchDiscussions();
  }

  userAuthentication() {
    if (this.state.email === userLoginData.email &&
        this.state.password === userLoginData.password) {
      this.setState({
        isAuthenticated: true
      });
    }
  }

  renderCardContainer() {
    const { showingDiscussions, discussions, allDiscussions, comments } = this.state;
    if (showingDiscussions && discussions) {
      return (
        <CardContainer
          allDiscussions={allDiscussions}
          discussions={discussions}
          comments={comments}
          rendered={showingDiscussions}/>
      );
    }
  }

  render() {
    const { allDiscussions, discussions, comments, showingDiscussions, showingForm, showingStandards } = this.state;
    console.log(this.props.signedInStatus);

    if (this.props.signedInStatus === false) {
      return <Redirect to='/login'/>;
    }

    const showForm = showingForm
      ? <DiscussionForm rendered={showingForm}/> : null;

    const showStandards = showingStandards
      ? <FilterForm
        renderDiscussions={this.renderDiscussions}
        renderFilteredDiscussions={this.renderFilteredDiscussions}
        rendered={showingStandards}
        discussions={discussions} /> : null;

    return (
      <section className="app">
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

App.propTypes = {

};

export default App;
