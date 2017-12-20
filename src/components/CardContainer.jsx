import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CardContainer extends Component {
  render() {
    return (
      <div>I AM THE CardContainer
        <DiscussionCard />
        <Comment />
        <CommentForm />
      </div>
    );
  }
}

export default CardContainer;
