import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
import Landing from './Landing';
import { Redirect } from 'react-router';
import { PROD_URL } from '../utils/url.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      filteredDiscussions: [],
      showingDiscussions: false,
      showingForm: false,
      showingStandards: false,
      showingData: true,
    };

    this.renderDiscussions = this.renderDiscussions.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderStandards = this.renderStandards.bind(this);
    this.renderData = this.renderData.bind(this);
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
    fetch(`${PROD_URL}/api/v1/discussions`)
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
      showingData: false,
    });
  }

  renderForm() {
    this.setState({
      showingDiscussions: false,
      showingForm: true,
      showingStandards: false,
      showingData: false,
    });
  }

  renderStandards() {
    this.setState({
      showingDiscussions: false,
      showingForm: false,
      showingStandards: true,
      showingData: false,
    });
  }

  renderData() {
    this.setState({
      showingDiscussions: false,
      showingForm: false,
      showingStandards: false,
      showingData: true,
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
    const { showingForm, showingStandards, filteredDiscussions, showingData } = this.state;

    if (this.props.signedInStatus === false) {
      return <Redirect to='/login'/>;
    }

    const showForm = showingForm
      ? <DiscussionForm rendered={showingForm}/> : null;

    const showStandards = showingStandards
      ? <FilterForm
        renderDiscussions={this.renderDiscussions}
        renderFilteredDiscussions={this.renderFilteredDiscussions}
        discussions={this.props.discussions}
        filteredDiscussions={filteredDiscussions}
      /> : null;

    const showData = showingData
      ? <Landing /> : null;

    return (
      <section className="app">
        <article className="main">
          <Nav
            filteredDiscussions={filteredDiscussions}
            renderDiscussions={this.renderDiscussions}
            renderForm={this.renderForm}
            renderStandards={this.renderStandards}
            renderFilteredDiscussions={this.renderFilteredDiscussions}
            handleSearch={this.handleSearch}
            fetchDiscussions={this.fetchDiscussions}
            renderData={this.renderData}
          />
          <section className="bottom-main">
            { this.renderCardContainer() }
            { showForm }
            { showStandards }
            { showData }
          </section>
        </article>
      </section>
    );
  }
}

App.propTypes = {
  discussions: PropTypes.array,
  signedInStatus: PropTypes.bool,
  signOut: PropTypes.func,
  setCurrentUser: PropTypes.func,
  updateDiscussions: PropTypes.func,
  retrieveComments: PropTypes.func,
  retrieveDiscussions: PropTypes.func,
};

export default App;
