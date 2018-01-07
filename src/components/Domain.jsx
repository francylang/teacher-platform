import React from 'react';
import PropTypes from 'prop-types';

const Domain = ({ domain, selectDomain, gradeSelected, color }) => {
  return (
    <div className="grade-level-domains">
      <button
        className={`grade-level-domain ${color}`}
        value={gradeSelected}
        onClick={selectDomain}
      >{domain}
      </button>
    </div>
  );
};

export default Domain;
