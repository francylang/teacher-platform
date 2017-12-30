import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <label htmlFor="search-input"></label>
        <input
          type="text"
          id="search-input"
          placeholder="Search discussions..." >
        </input>
        <button
          onClick={() => this.props.renderStandards()}
          className="filter-btn"
        >
          <p className="standard-option">
            Standards
          </p>
        </button>
        <button
          onClick={() => this.props.renderForm()}
          className="toggle-discussion-form-btn"
          value="form">
          <h4 className="new-discussion-option">
            New Discussion
          </h4>
        </button>
        <button
          onClick={() => this.props.renderDiscussions()}
          className="toggle-discussions-btn"
          value="form">
          <h4 className="new-discussion-option">
            All Discussions
          </h4>
        </button>
      </div>
    );
  }
}

export default Nav;
