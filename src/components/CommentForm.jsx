import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { postComment } from '../utils/postComment.js';

class CommentForm extends Component {
  constructor() {
    super();
    this.state = {
      body: ''
    };
  }

  handleChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    postComment(this.state.body, this.props.discussionId);
    this.setState({ body: '' });
  }

  render() {
    return (
      <article className="comment-form-containter">
        <aside className="comment-form-directions">
          <h4 className="comment-form-header">
            Add a comment:
          </h4>
          <p className="directions-text">Please be kind and specific, and provide links to any references resources. </p>
        </aside>
        <form className="comment-form">
          <label htmlFor="get-comment">
            <textarea
              id="get-comment"
              type="text"
              name="comment"
              value={this.state.body}
              onChange={this.handleChange.bind(this)}
            >
            </textarea>
          </label>
          <button
            className="submit-comment"
            type="submit"
            name="submit"
            onClick={(event) => this.handleSubmit(event)}
          >Submit
          </button>
        </form>
      </article>
    );
  }
}

CommentForm.propTypes = {
  discussionId: PropTypes.number,
};

export default CommentForm;
