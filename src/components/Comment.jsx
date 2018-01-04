import React, { Component } from 'react';

class Comment extends Component {
  comments() {
    console.log(this.props.commentId);
    console.log(this.props.discussionId);
    if (this.props.commentId === this.props.discussionId) {
      return this.props.comment
    }
  }

  render() {
    console.log(this.props);
    return (
      <article className="comment-section">
        <h4 className="comments-header">Comments:</h4>
        <p className="comment">{this.comments()}</p>
        <ul>
          <li>From: Amy</li>
          <li>Date: December 28, 2018</li>
        </ul>
      </article>
    );
  }
}

export default Comment;
