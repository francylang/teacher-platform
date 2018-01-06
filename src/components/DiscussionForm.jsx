import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

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
    event.preventDefault();
    const { title, body } = this.state;
    postNewDiscussion(title, body);
    this.clearInputs();
  }

  selectGrade(event) {
    event.preventDefault();
    this.setState({
      gradeSelected: event.target.value
    })
  }

  renderDomains() {
    if (this.state.gradeSelected === "6" || this.state.gradeSelected === "7") {
      console.log('if', this.state.gradeSelected);
      return (
        <div>
          <h4 className="grade-level-domain">Ratios and Proportional Relationships</h4>
          <h4 className="grade-level-domain">The Number System</h4>
          <h4 className="grade-level-domain">Expressions & Equations</h4>
          <h4 className="grade-level-domain">Geometry</h4>
          <h4 className="grade-level-domain">Statistics & Probability</h4>
        </div>
      )
    } else if (this.state.gradeSelected === "8") {
      console.log('else if');
      return (
        <div>
          <h4 className="grade-level-domain">The Number System</h4>
          <h4 className="grade-level-domain">Expressions & Equations</h4>
          <h4 className="grade-level-domain">Functions</h4>
          <h4 className="grade-level-domain">Geometry</h4>
          <h4 className="grade-level-domain">Statistics & Probability</h4>
        </div>
      )
    } else {
      console.log('else');
      return (
        <div></div>
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
          <button
            className="submit-discussion-btn"
            onClick={(event) => this.handleSubmit(event)}
          >Submit
          </button>
        </form>
      </article>
    )
  }
}

export default DiscussionForm
