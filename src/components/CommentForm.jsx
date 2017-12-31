import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <article>
        <form action="" method="get">
          <label htmlFor="get-comment">Comment:
            <input
              id="get-comment"
              type="text"
              name="comment"
            >
            </input>
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
