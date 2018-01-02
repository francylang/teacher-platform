import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  grabCommentsForDisscussion(id) {
    this.props.comments.filter(comment => {
      if (comment.discussionId === id) {
        return comment
      }
    })
  }

  buildDiscussionCard() {
    return this.props.discussions.map(discussion => {
      return (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
          comment={this.grabCommentsForDisscussion(discussion.id)}
        />)
    })
  }

  render() {
    return (
      <div className="card-section">
        <h2 className="current-feed-title">Discussions:</h2>
        {this.buildDiscussionCard()}
      </div>
    );
  }
}

export default CardContainer;
