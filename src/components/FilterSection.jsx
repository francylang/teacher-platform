import React from 'react';
import { PROD_URL } from '../url.js';

const FilterSection = ({ renderFilteredDiscussions, renderDiscussions, domain }) => {
  const fetchDiscussions = (standard) => {
    fetch(`${PROD_URL}/api/v1/discussions`)
      .then((response) => response.json())
      .then((rawDiscussions) => findMatchingDiscussions(rawDiscussions, standard))
      .then((matchingDiscussions) => {
        renderFilteredDiscussions(matchingDiscussions);
        renderDiscussions();
      })
      .catch((error) => console.error({ error }));
  }

  const findMatchingDiscussions = (rawDiscussions, standard) => {
    return rawDiscussions.filter((discussion) => {
      return discussion.tagTitle === standard
    });
  }

  const getFilteredDiscussions = (standard) => {
    fetchDiscussions(standard);
  }

  const buildDomainList = () => {
    return domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <button
            className="standard-link"
            onClick={() => getFilteredDiscussions(standard)}
          >
            <p className="standard-text">
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
  }

  return (
    <aside className="domain-section">
      {buildDomainList()}
    </aside>
  );
}

export default FilterSection;
