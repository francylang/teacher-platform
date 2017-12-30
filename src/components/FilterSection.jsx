import React, { Component } from 'react';

class FilterSection extends Component {
  buildDomainList() {
    return this.props.domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <div className="standard-checkbox pretty p-svg p-curve">
            <input
              type="checkbox"
              id={standard}
              name={standard}
              value={standard}
            >
            </input>
            <div class="state p-success">
              <svg class="svg svg-icon" viewBox="0 0 20 20">
                <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
              </svg>
              <label htmlFor={standard}>
                {standard}
              </label>
            </div>
          </div>
        );
      } else {
        return (
          <h4>{standard}</h4>
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
