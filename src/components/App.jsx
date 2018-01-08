import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
import { Redirect } from 'react-router';
import { PROD_URL } from '../url.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showingDiscussions: true,
      showingForm: false,
      showingStandards: false,
    };
    this.renderDiscussions = this.renderDiscussions.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderStandards = this.renderStandards.bind(this);
    this.renderFilteredDiscussions = this.renderFilteredDiscussions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.props.retrieveDiscussions();
    this.props.retrieveComments();
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
    // this.setState({ discussions });
    // we need to revisit
  }

  handleSearch() {
    this.props.retrieveDiscussions();
  }

  renderCardContainer() {
    const { showingDiscussions } = this.state;
    if (showingDiscussions && this.props.discussions) {
      return (
        <CardContainer
          // allDiscussions={allDiscussions}
          discussions={this.props.discussions}
          comments={this.props.comments}
          rendered={showingDiscussions}/>
      );
    }
  }

  render() {
    const {
      allDiscussions,
      discussions,
      comments,
      showingDiscussions,
      showingForm,
      showingStandards
    } = this.state;

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
        discussions={this.props.discussions} /> : null;

    return (
      <section className="app">
        <article className="main">
          <Nav
            // allDiscussions={allDiscussions}
            discussions={this.props.discussions}
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
