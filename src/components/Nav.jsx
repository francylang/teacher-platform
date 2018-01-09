import React from 'react';
import SearchContainer from '../containers/SearchContainer';
import { Link } from 'react-router-dom';

const Nav = ({
  handleSearch,
  renderDiscussions,
  renderFilteredDiscussions,
  renderStandards,
  renderForm,
  filteredDiscussions }) => {
  return (
    <div className="nav">
      <SearchContainer
        handleSearch={handleSearch}
        filteredDiscussions={filteredDiscussions}
        renderDiscussions={renderDiscussions}
        renderFilteredDiscussions={renderFilteredDiscussions}
      />
      <button
        onClick={() => renderStandards()}
        className="filter-btn"
      >
        <h4 className="standard-option">
          Standards
        </h4>
      </button>
      <button
        onClick={() => renderForm()}
        className="toggle-discussion-form-btn"
        value="form"
      >
        <h4 className="new-discussion-option">
          New Discussion
        </h4>
      </button>
      <button
        onClick={() => renderDiscussions()}
        className="toggle-discussions-btn"
        value="form"
      >
        <h4 className="new-discussion-option">
          All Discussions
        </h4>
      </button>
    </div>
  );
};

export default Nav;
