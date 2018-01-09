import React from 'react';
import PropTypes from 'prop-types';
import DiscussionCard from './DiscussionCard';

const CardContainer = ({ comments, filteredDiscussions }) => {
  const matchDiscussionIds = () => {
    if (filteredDiscussions) {
      comments.filter(comment => {
        return filteredDiscussions.forEach(discussion => {
          if (discussion.id === comment.id) {
            return comment.id;
          };
        });
      });
    };
  };

  const buildDiscussionCard = () => {
    matchDiscussionIds();
    return filteredDiscussions.map(discussion => {
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
      <h2 className="discussions-heading">
        Discussions
      </h2>
      {buildDiscussionCard()}
    </div>
  );
};

CardContainer.propTypes = {
  discussions: PropTypes.array,
  filteredDiscussions: PropTypes.array,
  comments: PropTypes.array,
};

export default CardContainer;
