import React, { Component } from 'react';

class FilterForm extends Component {
  constructor() {
    super();
    this.state = {
      selected: [],
    };
  };

  render() {
    return (
      <section>
        <h3>Select one or more topics to filter by:</h3>
        <h4>Math 6</h4>
        <p>Ratios and Proportions</p>
        <div>
          <input type="checkbox" id="6RPA1" name="6RPA1" value="6RPA1"></input>
          <label for="6RPA1">6.RP.A.1</label>
        </div>
        <div>
          <input type="checkbox" id="6RPA2" name="6RPA2" value="6RPA2"></input>
          <label for="6RPA2">6.RP.A.2</label>
        </div>
        <div>
          <input type="checkbox" id="6RPA3" name="6RPA3" value="6RPA3"></input>
          <label for="6RPA3">6.RP.A.3</label>
        </div>
        <div>
          <input type="checkbox" id="6RPA3A" name="6RPA3A" value="6RPA3A"></input>
          <label for="6RPA3A">6.RP.A.3.A</label>
        </div>
        <div>
          <input type="checkbox" id="6RPA3B" name="6RPA3B" value="6RPA3B"></input>
          <label for="6RPA3B">6.RP.A.3.B</label>
        </div>
        <div>
          <input type="checkbox" id="6RPA3C" name="6RPA3C" value="6RPA3C"></input>
          <label for="6RPA3C">6.RP.A.3.C</label>
        </div>
        <p>The Number System</p>
        <div>
          <input type="checkbox" id="6NSA1" name="6NSA1" value="6NSA1"></input>
          <label for="6NSA1">6.NS.A.1</label>
        </div>
        <div>
          <input type="checkbox" id="6NSB2" name="6NSB2" value="6NSB2"></input>
          <label for="6NSB2">6.NS.B.2</label>
        </div>
        <div>
          <input type="checkbox" id="6NSB3" name="6NSB3" value="6NSB3"></input>
          <label for="6NSB3">6.NS.B.3</label>
        </div>
        <div>
          <input type="checkbox" id="6NSB4" name="6NSB4" value="6NSB4"></input>
          <label for="6NSB4">6.NS.B.4</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC5" name="6NSC5" value="6NSC5"></input>
          <label for="6NSC5">6.NS.C.5</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC6" name="6NSC6" value="6NSC6"></input>
          <label for="6NSC6">6.NS.C.6</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC6A" name="6NSC6A" value="6NSC6A"></input>
          <label for="6NSC6A">6.NS.C.6.A</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC6B" name="6NSC6B" value="6NSC6B"></input>
          <label for="6NSC6B">6.NS.C.6.B</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC6C" name="6NSC6C" value="6NSC6C"></input>
          <label for="6NSC6C">6.NS.C.6.C</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC7" name="6NSC7" value="6NSC7"></input>
          <label for="6NSC7">6.NS.C.7</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC7A" name="6NSC7A" value="6NSC7A"></input>
          <label for="6NSC7A">6.NS.C.7.A</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC7B" name="6NSC7B" value="6NSC7B"></input>
          <label for="6NSC7B">6.NS.C.7.B</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC7C" name="6NSC7C" value="6NSC7C"></input>
          <label for="6NSC7C">6.NS.C.7.C</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC7D" name="6NSC7D" value="6NSC7D"></input>
          <label for="6NSC7D">6.NS.C.7.D</label>
        </div>
        <div>
          <input type="checkbox" id="6NSC8" name="6NSC8" value="6NSC8"></input>
          <label for="6NSC8">6.NS.C.8</label>
        </div>
        <p>Expressions and Equations</p>
        <p>Geometry and Measurement</p>
        <p>Statistics and Probability</p>

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
