import React, { Component } from 'react';

class FilterSection extends Component {
  constructor() {
    super();
    this.getFilteredDiscussions = this.getFilteredDiscussions.bind(this);
    this.fetchDiscussions = this.fetchDiscussions.bind(this);
  }

  fetchDiscussions(standard) {
    fetch('http://localhost:3000/api/v1/discussions')
      .then((response) => response.json())
      .then((rawDiscussions) => this.findMatchingDiscussions(rawDiscussions, standard))
      .then((matchingDiscussions) => {
        this.props.renderFilteredDiscussions(matchingDiscussions);
        this.props.renderDiscussions();
      })
      .catch((error) => console.error({ error }));
  }

  findMatchingDiscussions(rawDiscussions, standard) {
    return rawDiscussions.reduce((acc, discussion) => {
      if (discussion.tagTitle === standard) {
        acc.id = discussion.id;
        acc.title = discussion.title;
        acc.body = discussion.body;
        acc.tagId = discussion.tagId;
      }
      return acc;
    }, {});
  }

  getFilteredDiscussions(standard) {
    this.fetchDiscussions(standard);
  }

  buildDomainList() {
    return this.props.domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <button
            className="standard-link"
            onClick={() => this.getFilteredDiscussions(standard)}
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

  render() {
    return (
      <aside className="domain-section">
        {this.buildDomainList()}
      </aside>
    );
  }
}

export default FilterSection;
