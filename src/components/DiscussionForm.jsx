import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';
import { domainsByGrade } from '../utils/tagStandards';

class DiscussionForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      body: '',
      gradeSelected: '',
      domainSelected: '',
      standardSelected: ''
    }
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    })
  }

  clearInputs() {
    this.setState({
      title: '',
      body: '',
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { title, body } = this.state
    postNewDiscussion(title, body)
    this.clearInputs()
  }

  selectGrade(event) {
    event.preventDefault()
    this.setState({
      gradeSelected: event.target.value
    })
  }

  selectDomain(event) {
    event.preventDefault()
    this.setState({
      domainSelected: event.target.value,
    })
  }

  renderDropDown() {
    if (domainsByGrade[this.state.domainSelected]) {
      const mappedDomains = domainsByGrade[this.state.domainSelected].map(domain => {
        return (
          <option
            key={domain}
            value={domain}
          >
            {domain}
          </option>
        )
      })
      return (
        <select
          value={this.state.standardSelected}
          onChange={this.handleStandardSelect.bind(this)}
        >
          {mappedDomains}
        </select>
      )
    }
  }

  handleStandardSelect(event) {
    this.setState({
      standardSelected: event.target.value
    })
  }

  renderDomains() {
    if (this.state.gradeSelected === "6" || this.state.gradeSelected === "7") {
      return (
        <div className="grade-6-7-domains">
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-RP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Ratios and Proportional Relationships</button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-NS`}
            onClick={(event) => this.selectDomain(event)}
          >
            The Number System</button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-EE`}
            onClick={(event) => this.selectDomain(event)}
          >
            Expressions & Equations</button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-G`}
            onClick={(event) => this.selectDomain(event)}
          >
            Geometry
          </button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-SP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Statistics & Probability
          </button>
        </div>
      )
    } else if (this.state.gradeSelected === "8") {
      return (
        <div className="grade-8-domains">
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-NS`}
            onClick={(event) => this.selectDomain(event)}
          >
            The Number System
          </button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-EE`}
            onClick={(event) => this.selectDomain(event)}
          >
            Expressions & Equations
          </button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-F`}
            onClick={(event) => this.selectDomain(event)}
          >
            Functions
          </button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-G`}
            onClick={(event) => this.selectDomain(event)}
          >
            Geometry
          </button>
          <button
            className="grade-level-domain"
            value={`${this.state.gradeSelected}-SP`}
            onClick={(event) => this.selectDomain(event)}
          >
            Statistics & Probability
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <article className="discussion-form-section">
        <form action="" method="get" className="form">
          <label htmlFor="dicussion-title">
            <input
              id="dicussion-title"
              type="text"
              name="title"
              value={this.state.title}
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
              value={this.state.body}
              placeholder="Detailed question"
              onChange={this.handleChange.bind(this, 'body')}
            >
            </textarea>
            <div>{this.state.standardSelected}</div>
          </label>
          <div className="grade-level-buttons">
            <h4>Choose your grade level</h4>
            <button
              className="grade-level-button"
              value="6"
              onClick={(event) => this.selectGrade(event)}
            >
              Grade 6
            </button>
            <button
              className="grade-level-button"
              value="7"
              onClick={(event) => this.selectGrade(event)}
            >
              Grade 7
            </button>
            <button
              className="grade-level-button"
              value="8"
              onClick={(event) => this.selectGrade(event)}
            >
              Grade 8
            </button>
          </div>
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
    )
  }
}

export default DiscussionForm;
