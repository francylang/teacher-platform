import React from 'react';
import DiscussionCard from './DiscussionCard';

const CardContainer = ({ comments, discussions }) => {
  const matchDiscussionIds = () => {
    if (discussions) {
      comments.filter(comment => {
        return discussions.forEach(discussion => {
          if (discussion.id === comment.id) {
            return comment.id
          };
        });
      });
    };
  };

  const buildDiscussionCard = () => {
    matchDiscussionIds()
    return discussions.map(discussion => {
      return (
        <DiscussionCard
          key={discussion.id}
          discussion={discussion}
          comments={comments}
        />
      );
    });
  };

  return (
    <div className="card-section">
      <h2 className="current-feed-title">
        Discussions:
      </h2>
      {buildDiscussionCard()}
    </div>
  );
};

export default CardContainer;
