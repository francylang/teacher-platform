import React, { Component } from 'react';

class FilterSection extends Component {
  buildDomainList() {
    return this.props.domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <div className="standard-checkbox pretty p-icon p-round p-smooth">
            <input
              type="checkbox"
              id={standard}
              name={standard}
              value={standard}
            >
            </input>
            <div className="state p-info">
              <i className="icon"></i>
              <label htmlFor={standard}>
                {standard}
              </label>
            </div>
          </div>
        );
      } else {
        return (
          <h5 className="domain-label">{standard}</h5>
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
