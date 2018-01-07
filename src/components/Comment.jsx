import React, { Component } from 'react';
import CommentForm from './CommentForm';

class Comment extends Component {
  render() {
    const { commentId, discussionId, comment } = this.props;
    if (commentId === discussionId) {
      return (
        <article className="comment-section">
          <p className="comment">{comment}</p>
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
