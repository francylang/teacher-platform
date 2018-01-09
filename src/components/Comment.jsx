import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Comment.propTypes = {
  commentId: PropTypes.number,
  discussionId: PropTypes.number,
  comment: PropTypes.string,
};

export default Comment;
