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
      return [
        <Comment />,
        <CommentForm />,
      ];
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
    return (
      <article className="card">
        <section className="top-card">
          <h4 className="card-title">First Discussion Topic</h4>
          <p className="card-body">
            This is a discussion. There is all kinds of important information in this discussion. A very serious math question.
          </p>
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
