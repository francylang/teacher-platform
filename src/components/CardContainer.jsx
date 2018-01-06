import React, { Component } from 'react';
import DiscussionCard from './DiscussionCard';

class CardContainer extends Component {
  matchDiscussionIds() {
    const { comments, discussions } = this.props;

    let filtered = comments.filter(comment => {
      return discussions.forEach(discussion => {
        if (discussion.id === comment.id) {
          return comment.id
        }
      })
    })
  }

  buildDiscussionCard() {
    this.matchDiscussionIds()
    console.log(this.props.discussions);
    return this.props.discussions.map(discussion => {
      console.log(discussion);
      return (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
          comments={this.props.comments}
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
