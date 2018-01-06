import React, { Component } from 'react';
import Search from './Search';

class Nav extends Component {
  render() {
    const { handleSearch, allDiscussions, discussions, renderDiscussions, renderFilteredDiscussions } = this.props;
    return (
      <div className="nav">
        <Search
          handleSearch={handleSearch}
          renderDiscussions={renderDiscussions}
          discussions={discussions}
          allDiscussions={allDiscussions}
          renderFilteredDiscussions={renderFilteredDiscussions}
        />
        <button
          onClick={() => this.props.renderStandards()}
          className="filter-btn"
        >
          <h4 className="standard-option">
            Standards
          </h4>
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
