import React, { Component } from 'react';

class CommentForm extends Component {
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
            >
            </textarea>
          </label>
          <button
            className="submit-comment"
            type="submit"
            name="submit"
          >Submit
          </button>
        </form>
      </article>
    );
  }
}

export default CommentForm;
