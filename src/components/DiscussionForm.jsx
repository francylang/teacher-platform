import React, { Component } from 'react';
import Domain from './Domain';
import { colorsByDomain } from '../assets/colors';
import { postNewDiscussion } from '../utils/postDiscussion';
import { domainsByGrade, domains67, domains8 } from '../utils/tagStandards';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      gradeSelected: '',
      domainSelected: '',
      standardSelected: '',
      isActive: false
    };
    this.selectDomain = this.selectDomain.bind(this);
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
    event.target.classList.toggle('active');

    this.setState({
      gradeSelected: event.target.value,
      isActive: !this.state.isActive
    });
  }

  selectDomain(event) {
    event.preventDefault();

    this.setState({ domainSelected: event.target.value[0] });
  }

  handleSelectStandard(event) {
    const { title, body } = this.state;

    event.preventDefault();
    this.setState({ standardSelected: event.target.value });
    postNewDiscussion(title, body);
    this.clearInputs();
  }

  renderDropDown() {
    const { domainSelected, standardSelected, gradeSelected } = this.state;
    const standardAbbrev = (`${gradeSelected}-${domainSelected}`);

    if (domainSelected) {
      const mappedDomains = domainsByGrade[standardAbbrev].map(domain => {
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
      return domains67.map((domain, index) => {
        return (
          <Domain
            key={domain}
            domain={domain}
            selectDomain={this.selectDomain}
            domainSelected={this.state.domainSelected}
            color={colorsByDomain[index]}
          />
        );
      });
    } else if (gradeSelected === "8") {
      return domains8.map((domain, index) => {
        return (
          <Domain
            key={domain}
            domain={domain}
            selectDomain={this.selectDomain}
            domainSelected={this.state.domainSelected}
            color={colorsByDomain[index]}
          />
        );
      });
    }
  }

  renderGradeLevelButtons() {
    const gradeLevels = ['Grade 6', 'Grade 7', 'Grade 8'];
    const gradeLevelNums = ['6', '7', '8'];

    return gradeLevels.map((grade, index) => {
      return (
        <button
          key={index}
          className={`grade-level-button btn-${gradeLevelNums[index]}`}
          value={gradeLevelNums[index]}
          onClick={(event) => this.selectGrade(event)}
        >{grade}</button>
      );
    });
  }

  render() {
    const { title, body, standardSelected } = this.state;

    return (
      <article className="discussion-form-section">
        <h3 className="form-directions">Start a discussion.</h3>
        <p className="form-directions">Be clear and specific so others can be as helpful as possible! After writing your question, you will be prompted to select a CCSS that aligns to your question.</p>
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
          <h3 className="grade-directions">Select a grade level, then a domain:</h3>
          <div className="grade-level-buttons">{this.renderGradeLevelButtons()}</div>
          <div className="grade-level-domains">{this.renderDomains()}</div>
          <div className="grade-level-standards">{this.renderDropDown()}</div>
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
