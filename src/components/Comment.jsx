import React, { Component } from 'react';
import CommentForm from './CommentForm';

class Comment extends Component {
  render() {
    if (this.props.commentId === this.props.discussionId) {
      return (
        <article className="comment-section">
          <p className="comment">{this.props.comment}</p>
          <ul>
            <li>From: Amy</li>
            <li>Date: December 28, 2018</li>
          </ul>
        </article>
      )
    } else {
      return null;
    }
  }
}

export default Comment;
