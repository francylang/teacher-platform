import React, { Component } from 'react';
import Domain from './Domain';
import { postNewDiscussion } from '../utils/postDiscussion';
import { domainsByGrade } from '../utils/tagStandards';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      gradeSelected: '',
      domainSelected: '',
      standardSelected: ''
    };
    this.domains67 = [
      'Ratios and Proportional Relationships',
      'The Number System',
      'Expressions & Equations',
      'Geometry',
      'Statistics & Probability'
    ];
    this.domains8 = [
      'Functions',
      'The Number System',
      'Expressions & Equations',
      'Geometry',
      'Statistics & Probability'
    ];
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  clearInputs() {
    this.setState({
      title: '',
      body: '',
    });
  }

  handleSubmit(event) {
    const { title, body, standardSelected } = this.state;

    event.preventDefault();
    postNewDiscussion(title, body, standardSelected);
    this.clearInputs();
  }

  selectGrade(event) {
    event.preventDefault();
    this.setState({ gradeSelected: event.target.value });
  }

  selectDomain(event) {
    event.preventDefault();
    this.setState({ domainSelected: event.target.value });
  }

  handleSelectStandard(event) {
    const { title, body } = this.state;

    this.setState({ standardSelected: event.target.value });
    event.preventDefault();
    postNewDiscussion(title, body);
    this.clearInputs();
  }

  renderDropDown() {
    const { domainSelected, standardSelected } = this.state;

    if (domainsByGrade[domainSelected]) {
      const mappedDomains = domainsByGrade[domainSelected].map(domain => {
        return (
          <option
            key={domain}
            value={domain}
          >
            {domain}
          </option>
        );
      });
      return (
        <select
          value={standardSelected}
          onChange={this.handleSelectStandard.bind(this)}>
        >
          {mappedDomains}
        </select>
      );
    }
  }

  handleStandardSelect(event) {
    this.setState({ standardSelected: event.target.value });
  }

  renderDomains() {
    const { gradeSelected } = this.state;
    if (gradeSelected === "6" || gradeSelected === "7") {
      return this.domains67.map((domain, index) => {
        return (
          <Domain
            key={domain}
            domain={domain}
            selectDomain={(event) => this.selectDomain(event)}
            gradeSelected={this.state.gradeSelected}
          />
        );
      });
    } else if (gradeSelected === "8") {
      return this.domains8.map((domain, index) => {
        return (
          <Domain
            key={domain}
            domain={domain}
            selectDomain={(event) => this.selectDomain(event)}
            gradeSelected={this.state.gradeSelected}
          />
        );
      });
    }
  }

  renderGradeLevelButtons() {
    return (
      <div className="grade-level-buttons">
        <h4>Choose a grade level</h4>
        <button
          className="grade-level-button btn-6"
          value="6"
          onClick={(event) => this.selectGrade(event)}
        >
          Grade 6
        </button>
        <button
          className="grade-level-button btn-7"
          value="7"
          onClick={(event) => this.selectGrade(event)}
        >
          Grade 7
        </button>
        <button
          className="grade-level-button btn-8"
          value="8"
          onClick={(event) => this.selectGrade(event)}
        >
          Grade 8
        </button>
      </div>
    )
  }

  render() {
    const { title, body, standardSelected } = this.state;
    return (
      <article className="discussion-form-section">
        <form action="" method="get" className="form">
          <label htmlFor="dicussion-title">
            <input
              id="dicussion-title"
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={this.handleChange.bind(this, 'title')}
            >
            </input>
          </label>
          <label htmlFor="dicussion-body">
            <textarea
              id="dicussion-body"
              type="text"
              name="body"
              value={body}
              placeholder="Detailed question"
              onChange={this.handleChange.bind(this, 'body')}
            >
            </textarea>
            <div>{standardSelected}</div>
          </label>
          {this.renderGradeLevelButtons()}
          <div className="grade-level-domains">
            {this.renderDomains()}
          </div>
          <div className="grade-level-standards">
            {this.renderDropDown()}
          </div>
          <button
            className="submit-discussion-btn"
            onClick={(event) => this.handleSubmit(event)}
          >
            Submit
          </button>
        </form>
      </article>
    );
  }
}

export default DiscussionForm;
