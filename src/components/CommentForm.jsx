import React, { Component } from 'react';

class CommentForm extends Component {
  render() {
    return (
      <article>
        <form action="" method="get">
          <label htmlFor="GET-comment">Comment:
            <input id="GET-comment" type="text" name="comment" />
          </label>
          <input className="submit-discussion" type="submit" name="submit" />
        </form>
      </article>
    );
  }
}

export default CommentForm;
