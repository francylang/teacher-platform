import React, { Component } from 'react';
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
    this.colors = ['red', 'green', 'navy', 'purple', 'yellow', 'blue', 'orange'];
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
      return (
        <div className="grade-6-7-domains">
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-RP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Ratios and Proportional Relationships</button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-NS`}
            onClick={(event) => this.selectDomain(event)}
          >
            The Number System</button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-EE`}
            onClick={(event) => this.selectDomain(event)}
          >
            Expressions & Equations</button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-G`}
            onClick={(event) => this.selectDomain(event)}
          >
            Geometry
          </button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-SP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Statistics & Probability
          </button>
        </div>
      );
    } else if (gradeSelected === "8") {
      return (
        <div className="grade-8-domains">
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-NS`}
            onClick={(event) => this.selectDomain(event)}
          >
            The Number System
          </button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-EE`}
            onClick={(event) => this.selectDomain(event)}
          >
            Expressions & Equations
          </button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-F`}
            onClick={(event) => this.selectDomain(event)}
          >
            Functions
          </button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-G`}
            onClick={(event) => this.selectDomain(event)}
          >
            Geometry
          </button>
          <button
            className="grade-level-domain"
            value={`${gradeSelected}-SP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Statistics & Probability
          </button>
        </div>
      );
    }
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
