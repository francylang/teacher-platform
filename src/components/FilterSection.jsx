import React from 'react';
// import { PROD_URL } from '../url.js';

const FilterSection = ({ renderFilteredDiscussions, renderDiscussions, domain }) => {
  const fetchDiscussions = standard => {
    fetch(`http://localhost:3000/api/v1/discussions`)
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

  const getFilteredDiscussions = standard => {
    fetchDiscussions(standard);
  };

  const buildDomainList = () => {
    return domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <button
            className="standard-link"
            onClick={() => getFilteredDiscussions(standard)}
          >
            <p className={`standard-text ${standard[2]}-link`}>
              {standard}
            </p>
          </button>
        );
      } else {
        return (
          <section className="domain-label-container">
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

export default FilterSection;
