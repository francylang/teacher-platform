import React, { Component } from 'react';
import { postNewDiscussion } from '../utils/postDiscussion';

class DiscussionForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      posted: false,
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;
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
              placeholder="Detailed question"
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
