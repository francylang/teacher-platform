import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class DiscussionCard extends Component {
  constructor () {
    super();
    this.state = {
      displayingComment: false,
      displayingCommentForm: false
    };
  }

  toggleComments() {
    this.setState({
      displayingComment: !this.state.displayingComment,
      displayingCommentForm: !this.state.displayingCommentForm
    });
  }

  showMoreLess() {
    if (this.state.displayingComment) {
      return (
        <p className="show-more-less-text">Less</p>
      );
    } else {
      return (
        <p className="show-more-less-text">More</p>
      );
    }
  }

  showCommentsTitle() {
    if (this.state.displayingComment) {
      return (
        <h3 className="comments-header">Comments:</h3>
      );
    }
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
        );
      });
    }
  }

  showCommentForm() {
    if (this.state.displayingCommentForm) {
      return (
        <CommentForm
          discussionId={this.props.discussion.id}/>
      );
    }
  }

  render() {
    const { title, body, tagTitle } = this.props.discussion;
    return (
      <article className="card">
        <section className="top-card">
          <div className="card-title-container">
            <h4 className="card-title">{title}</h4>
            <p className={`card-tag ${tagTitle[2]}`}>{tagTitle}</p>
          </div>
          <p className="card-body">{body}</p>
        </section>
        <button
          onClick={() => this.toggleComments()}
          className="show-more-btn">
          {this.showMoreLess()}
        </button>
        {this.showCommentsTitle()}
        {this.showComments()}
        {this.showCommentForm()}
      </article>
    );
  }
}

export default DiscussionCard;
