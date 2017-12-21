import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  render() {
    return (
      <div>
        <h2 className="current-feed-title">Discussions:</h2>
        <DiscussionCard />

      </div>
    );
  }
}

export default CardContainer;
