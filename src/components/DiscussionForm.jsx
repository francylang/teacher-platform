import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
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
