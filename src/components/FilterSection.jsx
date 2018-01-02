import React, { Component } from 'react';

class FilterSection extends Component {
  something() {
    console.log('hello');
  }

  buildDomainList() {
    return this.props.domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <button
            className="standard-link"
            onClick={() => this.something()}>
            <p className="standard-text">{standard}</p>
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
