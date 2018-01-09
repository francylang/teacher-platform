import React from 'react';
import PropTypes from 'prop-types';
import SearchContainer from '../containers/SearchContainer';
import { Link } from 'react-router-dom';

const Nav = ({
  handleSearch,
  renderDiscussions,
  renderFilteredDiscussions,
  renderStandards,
  renderForm,
  filteredDiscussions,
  fetchDiscussions }) => {
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
      <Link
        to='/discussionform'
        // onClick={() => renderForm()}
        className="toggle-discussion-form-btn"
        value="form"
      >
        <h4 className="new-discussion-option">
          New Discussion
        </h4>
      </Link>
      <button
        onClick={() => {
          renderDiscussions();
          fetchDiscussions();
        }}
        className="toggle-discussions-btn"
        value="form"
      >
        <h4 to='/discussions' className="new-discussion-option">
          All Discussions
        </h4>
      </button>
    </div>
  );
};

Nav.propTypes = {
  filteredDiscussions: PropTypes.array,
  fetchDiscussions: PropTypes.func,
  handleSearch: PropTypes.func,
  renderForm: PropTypes.func,
  renderStandards: PropTypes.func,
  renderDiscussions: PropTypes.func,
  renderFilteredDiscussions: PropTypes.func,
  signedInStatus: PropTypes.func,
};

export default Nav;
