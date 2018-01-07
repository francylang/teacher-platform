import React from 'react';
import PropTypes from 'prop-types';

const Domain = ({ domain, selectDomain, gradeSelected }) => {
  return (
    <div>
      <button
        className="grade-level-domain"
        value={`${gradeSelected}-RP`}
        onClick={selectDomain}
      >{domain}
      </button>
    </div>
  );
};

export default Domain;
