import React from 'react';
import PropTypes from 'prop-types';
import { PROD_URL } from '../utils/url.js';

const FilterSection = ({ renderFilteredDiscussions, renderDiscussions, domain }) => {
  const fetchDiscussions = standard => {
    fetch(`${PROD_URL}/api/v1/discussions`)
      .then((response) => response.json())
      .then((rawDiscussions) => findMatchingDiscussions(rawDiscussions, standard))
      .then((matchingDiscussions) => {
        renderDiscussions();
        renderFilteredDiscussions(matchingDiscussions);
      })
      .catch((error) => console.error({ error }));
  };

  const findMatchingDiscussions = (rawDiscussions, standard) => {
    return rawDiscussions.filter((discussion) => {
      if (standard === discussion.tagTitle) {
        return discussion;
      };
    });
  };

  const buildDomainList = () => {
    return domain.map((standard, index) => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <button
            key={index}
            className="standard-link"
            onClick={() => fetchDiscussions(standard)}
            key={standard}
          >
            <p className={`standard-text ${standard[2]}-link`}>
              {standard}
            </p>
          </button>
        );
      } else {
        return (
          <section
            className="domain-label-container"
            key={standard}
          >
            <h5 className="domain-label">
              {standard}
            </h5>
          </section>
        );
      }
    });
  };

  return (
    <aside className="domain-section">
      {buildDomainList()}
    </aside>
  );
};

FilterSection.propTypes = {
  domain: PropTypes.array,
  renderDiscussions: PropTypes.func,
  renderFilteredDiscussions: PropTypes.func,
};
export default FilterSection;
