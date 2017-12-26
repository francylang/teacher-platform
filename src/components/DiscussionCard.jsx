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
        <h4>Discussion Topic</h4>
        <p>Bacon ipsum d t-bone pork meatball. Pancetta ham turkey shankle turducken jerky.</p>
        <button onClick={() => this.toggleComments()}>Show/hide comments</button>
        {this.showComments()}
      </article>
    );
  }
}

export default DiscussionCard;
