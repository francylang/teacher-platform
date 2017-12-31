import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <article className="comment-section">
        <h4 className="comments-header">Comments:</h4>
        <p className="comment">
          I am the comment and I am a really great comment!!!
        </p>
        <p className="comment">
          I am ANOTHER comment and I am a really great comment!!!
        </p>
      </article>
    );
  }
}

export default Comment;
