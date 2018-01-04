import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class DiscussionCard extends Component {
  constructor () {
    super();
    this.state = {
      displayingComment: false,
    };
  }

  toggleComments() {
    this.setState({
      displayingComment: !this.state.displayingComment,
    });
  }

  showComments() {
    if (this.state.displayingComment) {
      return this.props.comments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment.comment}
            commentId={comment.discussionId}
            discussionId={this.props.discussion.id}
          />
        )
      })
    }
  }

  showMoreLess() {
    if (this.state.displayingComment) {
      return (
        <p className="show-more-less-text">Hide Comments</p>
      )
    } else {
      return (
        <p className="show-more-less-text">Show Comments</p>
      )
    }
  }

  render() {
    const { title, body } = this.props.discussion
    return (
      <article className="card">
        <section className="top-card">
          <h4 className="card-title">{title}</h4>
          <p className="card-body">{body}</p>
        </section>
        <button
          onClick={() => this.toggleComments()}
          className="show-more-btn">
          {this.showMoreLess()}
        </button>
        {this.showComments()}
      </article>
    );
  }
}

export default DiscussionCard;
