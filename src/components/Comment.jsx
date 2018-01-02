import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <article className="comment-section">
        <h4 className="comments-header">Comments:</h4>
        <p className="comment">
          I am the comment and I am a really great comment!!!
        </p>
        <ul>
          <li>From: Amy</li>
          <li>Date: December 28, 2018</li>
        </ul>
        <p className="comment">
          I am ANOTHER comment and I am a really great comment!!!
        </p>
        <ul>
          <li>From: Amy</li>
          <li>Date: December 28, 2018</li>
        </ul>
      </article>
    );
  }
}

export default Comment;
