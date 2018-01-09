import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { commentId, discussionId, comment } = this.props;

    if (commentId === discussionId) {
      return (
        <article className="comment-section">
          <p className="comment">{comment}</p>
        </article>
      );
    } else {
      return null;
    }
  };
};

export default Comment;
