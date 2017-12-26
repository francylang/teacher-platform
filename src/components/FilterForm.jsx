import React, { Component } from 'react';
import { math6RP, math6NS, math6EE, math6G, math6SP } from '../utils/standards';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
      showingDetails: false,
    };
  };

  gradeSix() {
    return math6RP.map(standard => {
      return (
        <p>{standard}</p>
      );
    })
  };

  showMore() {
    this.setState({ showingDetails: !this.state.showingDetails });
  };

  render() {
    const showStandards = this.state.showingDetails ? this.gradeSix() : null;

    return (
      <section>
        <h3>Select one or more topics to filter by:</h3>
        <h4>Math 6</h4>
        <button onClick={() => this.showMore()}>show all tags for grade 6</button>
        { showStandards }
        <p>Ratios and Proportions</p>

        <h4>Math 7</h4>
        <p>Ratios and Proportions</p>
        <p>Expressions and Equations</p>
        <p>Geometry and Measurement</p>
        <p>Statistics and Probability</p>
        <p>The Number System</p>

        <h4>Math 8</h4>
        <p>The Number System</p>
        <p>Expressions and Equations</p>
        <p>Functions</p>
        <p>Geometry</p>
        <p>Statistics and Probability</p>
      </section>
    );
  }
}

export default FilterForm;

// <div>
//   <input type="checkbox" id="6RPA1" name="6RPA1" value="6RPA1"></input>
//   <label htmlFor="6RPA1">6.RP.A.1</label>
// </div>
// <div>
// <input type="checkbox" id="6RPA2" name="6RPA2" value="6RPA2"></input>
// <label htmlFor="6RPA2">6.RP.A.2</label>
// </div>
// <div>
// <input type="checkbox" id="6RPA3" name="6RPA3" value="6RPA3"></input>
// <label htmlFor="6RPA3">6.RP.A.3</label>
// </div>
// <div>
// <input type="checkbox" id="6RPA3A" name="6RPA3A" value="6RPA3A"></input>
// <label htmlFor="6RPA3A">6.RP.A.3.A</label>
// </div>
// <div>
// <input type="checkbox" id="6RPA3B" name="6RPA3B" value="6RPA3B"></input>
// <label htmlFor="6RPA3B">6.RP.A.3.B</label>
// </div>
// <div>
// <input type="checkbox" id="6RPA3C" name="6RPA3C" value="6RPA3C"></input>
// <label htmlFor="6RPA3C">6.RP.A.3.C</label>
// </div>
// <p>The Number System</p>
// <div>
// <input type="checkbox" id="6NSA1" name="6NSA1" value="6NSA1"></input>
// <label htmlFor="6NSA1">6.NS.A.1</label>
// </div>
// <div>
// <input type="checkbox" id="6NSB2" name="6NSB2" value="6NSB2"></input>
// <label htmlFor="6NSB2">6.NS.B.2</label>
// </div>
// <div>
// <input type="checkbox" id="6NSB3" name="6NSB3" value="6NSB3"></input>
// <label htmlFor="6NSB3">6.NS.B.3</label>
// </div>
// <div>
// <input type="checkbox" id="6NSB4" name="6NSB4" value="6NSB4"></input>
// <label htmlFor="6NSB4">6.NS.B.4</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC5" name="6NSC5" value="6NSC5"></input>
// <label htmlFor="6NSC5">6.NS.C.5</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC6" name="6NSC6" value="6NSC6"></input>
// <label htmlFor="6NSC6">6.NS.C.6</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC6A" name="6NSC6A" value="6NSC6A"></input>
// <label htmlFor="6NSC6A">6.NS.C.6.A</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC6B" name="6NSC6B" value="6NSC6B"></input>
// <label htmlFor="6NSC6B">6.NS.C.6.B</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC6C" name="6NSC6C" value="6NSC6C"></input>
// <label htmlFor="6NSC6C">6.NS.C.6.C</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC7" name="6NSC7" value="6NSC7"></input>
// <label htmlFor="6NSC7">6.NS.C.7</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC7A" name="6NSC7A" value="6NSC7A"></input>
// <label htmlFor="6NSC7A">6.NS.C.7.A</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC7B" name="6NSC7B" value="6NSC7B"></input>
// <label htmlFor="6NSC7B">6.NS.C.7.B</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC7C" name="6NSC7C" value="6NSC7C"></input>
// <label htmlFor="6NSC7C">6.NS.C.7.C</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC7D" name="6NSC7D" value="6NSC7D"></input>
// <label htmlFor="6NSC7D">6.NS.C.7.D</label>
// </div>
// <div>
// <input type="checkbox" id="6NSC8" name="6NSC8" value="6NSC8"></input>
// <label htmlFor="6NSC8">6.NS.C.8</label>
// </div>
// <p>Expressions and Equations</p>
// <div>
// <input type="checkbox" id="6EEA1" name="6EEA1" value="6EEA1"></input>
// <label htmlFor="6EEA1">6.EE.A.1</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA2" name="6EEA2" value="6EEA2"></input>
// <label htmlFor="6EEA2">6.EE.A.2</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA2A" name="6EEA2A" value="6EEA2A"></input>
// <label htmlFor="6EEA2A">6.EE.A.2.A</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA2B" name="6EEA2B" value="6EEA2B"></input>
// <label htmlFor="6EEA2B">6.EE.A.2.B</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA2C" name="6EEA2C" value="6EEA2C"></input>
// <label htmlFor="6EEA2C">6.EE.A.2.C</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA3" name="6EEA3" value="6EEA3"></input>
// <label htmlFor="6EEA3">6.EE.A.3</label>
// </div>
// <div>
// <input type="checkbox" id="6EEA4" name="6EEA4" value="6EEA4"></input>
// <label htmlFor="6EEA4">6.EE.A.4</label>
// </div>
// <div>
// <input type="checkbox" id="6EEB5" name="6EEB5" value="6EEB5"></input>
// <label htmlFor="6EEB5">6.EE.B.5</label>
// </div>
// <div>
// <input type="checkbox" id="6EEB6" name="6EEB6" value="6EEB6"></input>
// <label htmlFor="6EEB6">6.EE.B.6</label>
// </div>
// <div>
// <input type="checkbox" id="6EEB7" name="6EEB7" value="6EEB7"></input>
// <label htmlFor="6EEB7">6.EE.B.7</label>
// </div>
// <div>
// <input type="checkbox" id="6EEB8" name="6EEB8" value="6EEB8"></input>
// <label htmlFor="6EEB8">6.EE.B.8</label>
// </div>
// <div>
// <input type="checkbox" id="6EEC9" name="6EEC9" value="6EEC9"></input>
// <label htmlFor="6EEC9">6.EE.C.9</label>
// </div>
// <p>Geometry and Measurement</p>
// <div>
// <input type="checkbox" id="6GA1" name="6GA1" value="6GA1"></input>
// <label htmlFor="6GA1">6.G.A.1</label>
// </div>
// <div>
// <input type="checkbox" id="6GA2" name="6GA2" value="6GA2"></input>
// <label htmlFor="6GA2">6.G.A.2</label>
// </div>
// <div>
// <input type="checkbox" id="6GA3" name="6GA3" value="6GA3"></input>
// <label htmlFor="6GA3">6.G.A.3</label>
// </div>
// <div>
// <input type="checkbox" id="6GA4" name="6GA4" value="6GA4"></input>
// <label htmlFor="6GA4">6.G.A.4</label>
// </div>
// <p>Statistics and Probability</p>
// <div>
// <input type="checkbox" id="6SPA1" name="6SPA1" value="6SPA1"></input>
// <label htmlFor="6SPA1">6.SP.A.1</label>
// </div>
// <div>
// <input type="checkbox" id="6SPA2" name="6SPA2" value="6SPA2"></input>
// <label htmlFor="6SPA2">6.SP.A.2</label>
// </div>
// <div>
// <input type="checkbox" id="6SPA3" name="6SPA3" value="6SPA3"></input>
// <label htmlFor="6SPA3">6.SP.A.3</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB4" name="6SPB4" value="6SPB4"></input>
// <label htmlFor="6SPB4">6.SP.B.4</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB5" name="6SPB5" value="6SPB5"></input>
// <label htmlFor="6SPB5">6.SP.B.5</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB5A" name="6SPB5A" value="6SPB5A"></input>
// <label htmlFor="6SPB5A">6.SP.B.5.A</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB5B" name="6SPB5B" value="6SPB5B"></input>
// <label htmlFor="6SPB5B">6.SP.B.5.B</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB5C" name="6SPB5C" value="6SPB5C"></input>
// <label htmlFor="6SPB5C">6.SP.B.5.C</label>
// </div>
// <div>
// <input type="checkbox" id="6SPB5D" name="6SPB5D" value="6SPB5D"></input>
// <label htmlFor="6SPB5D">6.SP.B.5.D</label>
// </div>
