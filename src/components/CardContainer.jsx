import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {
      discussions: [],
    };
  };

  render() {
    return (
      <div className="card-section">
        <h2 className="current-feed-title">Discussions:</h2>
        <DiscussionCard />
      </div>
    );
  }
}

export default CardContainer;
