import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
// import { Redirect } from 'react-router';
// import { PROD_URL } from '../url.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredDiscussions: [],
      showingDiscussions: true,
      showingForm: false,
      showingStandards: false,
    };

    this.renderDiscussions = this.renderDiscussions.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderStandards = this.renderStandards.bind(this);
    this.renderFilteredDiscussions = this.renderFilteredDiscussions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.fetchDiscussions = this.fetchDiscussions.bind(this);
  }

  componentDidMount() {
    this.props.retrieveDiscussions();
    this.fetchDiscussions();
    this.props.retrieveComments();
  }

  fetchDiscussions() {
    fetch(`http://localhost:3000/api/v1/discussions`)
      .then((response) => response.json())
      .then((rawDiscussions) => this.cleanDiscussions(rawDiscussions))
      .then((filteredDiscussions) => {
        this.setState({ filteredDiscussions });
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

  renderFilteredDiscussions(filteredDiscussions) {
    this.setState({ filteredDiscussions });
    this.props.updateDiscussions(filteredDiscussions);
  }

  handleSearch() {
    this.props.retrieveDiscussions();
  }

  renderCardContainer() {
    const { showingDiscussions, filteredDiscussions } = this.state;
    const { comments, discussions } = this.props;

    if (showingDiscussions && this.props.discussions) {
      return (
        <CardContainer
          discussions={discussions}
          filteredDiscussions={filteredDiscussions}
          comments={comments}
        />
      );
    }
  }

  render() {
    const { showingForm, showingStandards, filteredDiscussions } = this.state;

    if (this.props.signedInStatus === false) {
      // return <Redirect to='/login'/>;
    }

    const showForm = showingForm
      ? <DiscussionForm rendered={showingForm}/> : null;

    const showStandards = showingStandards
      ? <FilterForm
        renderDiscussions={this.renderDiscussions}
        renderFilteredDiscussions={this.renderFilteredDiscussions}
        rendered={showingStandards}
        discussions={this.props.discussions}
        filteredDiscussions={filteredDiscussions}
      /> : null;

    return (
      <section className="app">
        <article className="main">
          <Nav
            // discussions={this.props.discussions}
            filteredDiscussions={filteredDiscussions}
            renderDiscussions={this.renderDiscussions}
            renderForm={this.renderForm}
            renderStandards={this.renderStandards}
            renderFilteredDiscussions={this.renderFilteredDiscussions}
            handleSearch={this.handleSearch}
            fetchDiscussions={this.fetchDiscussions}
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
