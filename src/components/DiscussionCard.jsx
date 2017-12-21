import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class DiscussionCard extends Component {
  render() {
    return (
      <article className="card">
        <h4>Discussion Topic</h4>
        <p>Bacon ipsum dolor sit amet tenderloin salami pig, fatback pastrami ham hock shoulder bacon t-bone pork meatball. Pancetta ham turkey shankle turducken jerky.</p>
        <button>Show/hide comments</button>
        <Comment />
        <CommentForm />
      </article>
    );
  }
}

export default DiscussionCard;
