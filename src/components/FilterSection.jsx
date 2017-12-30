import React, { Component } from 'react';

class FilterSection extends Component {
  buildDomainList() {
    return this.props.domain.map(standard => {
      let firstChar = standard.charAt(0);

      if (firstChar === '6' || firstChar === '7' || firstChar === '8') {
        return (
          <div className="standard-checkbox">
            <input type="checkbox" id={standard} name={standard} value={standard}></input>
            <label htmlFor={standard}>{standard}</label>
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
