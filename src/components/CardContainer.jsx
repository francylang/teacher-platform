import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  buildDiscussionCard() {
    return this.props.discussions.map(discussion => {
      return (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
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
