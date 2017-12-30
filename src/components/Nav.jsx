import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
{/* took from Search */}
        <label htmlFor="search-input"></label>
        <input type="text" id="search-input" placeholder="Search discussions..." ></input>
{/* took from Filter */}
        <button
          onClick={(event) => this.props.renderStandards(event)}
          className="filter-btn">
          <p className="standard-option">Standards</p>
          {/* <div className="down-arrow"></div> */}
        </button>
{/* took from DiscussionForm */}
        <button
          onClick={(event) => this.props.renderForm(event)}
          className="toggle-discussion-form-btn"
          value="form">
          <h4 className="new-discussion-option">
            New Discussion
          </h4>
        </button>

        <button
          onClick={(event) => this.props.renderDiscussions(event)}
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
