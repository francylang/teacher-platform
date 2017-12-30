import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';
// import { getDiscussions } from '../utils/getDiscussions';

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

  render() {
    return (
      <article className="card">
        <h4>First Discussion Topic</h4>
        <p>
          This is a discussion. There is all kinds of importnat information in this discussion. A very serious math question.
        </p>
        <button
          onClick={() => this.toggleComments()}
          className="show-more-btn">
        </button>
        {this.showComments()}
      </article>
    );
  }
}

export default DiscussionCard;
