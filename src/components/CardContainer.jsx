import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  matchDiscussionIds() {
    const { comments, discussions } = this.props;

    if (discussions) {
      comments.filter(comment => {
        return discussions.forEach(discussion => {
          if (discussion.id === comment.id) {
            return comment.id
          }
        })
      })
    }
  }

  buildDiscussionCard() {
    const { discussions, comments } = this.props;

    this.matchDiscussionIds()
    return discussions.map(discussion => {
      return (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
          comments={comments}
        />)
    })
  }

  render() {
    return (
      <div className="card-section">
        <h2 className="current-feed-title">
          Discussions:
        </h2>
        {this.buildDiscussionCard()}
      </div>
    );
  }
}

export default CardContainer;
