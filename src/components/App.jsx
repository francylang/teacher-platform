import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import FilterForm from './FilterForm';
// import { fetchDiscussions } from '../utils/getDiscussions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
      showingDiscussions: false,
      showingForm: true,
      showingStandards: false,
    };
    this.renderStandards = this.renderStandards.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderDiscussions = this.renderDiscussions.bind(this);
    this.fetchDiscussions = this.fetchDiscussions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.fetchDiscussions();
  }

  handleSearch() {
    this.fetchDiscussions()
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
        id: discussion.id,
        title: discussion.title,
        body: discussion.body,
        tagId: discussion.tagId,
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

  render() {
    const { showingDiscussions, showingForm, showingStandards } = this.state;
    const showDiscussions = showingDiscussions
      ? <CardContainer
        discussions={this.state.discussions}
        rendered={this.state.showingDiscussions}/> : null;

    const showForm = showingForm
      ? <DiscussionForm rendered={this.state.showingForm}/> : null;

    const showStandards = showingStandards
      ? <FilterForm rendered={this.state.showingStandards}/> : null;

    return (
      <section className="app">
        <Header />
        <article className="main">
          <Nav
            renderStandards={this.renderStandards}
            renderForm={this.renderForm}
            renderDiscussions={this.renderDiscussions}
            handleSearch={this.handleSearch}
            discussions={this.state.discussions}
          />
          <section className="bottom-main">
            { showDiscussions }
            { showForm }
            { showStandards }
          </section>
        </article>
      </section>
    );
  }
}

export default App;
