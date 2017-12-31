import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <article>
        <h4 className="comment-form-header">
          Add a comment:
        </h4>
        <form action="" method="get">
          <label htmlFor="get-comment">Comment:
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
