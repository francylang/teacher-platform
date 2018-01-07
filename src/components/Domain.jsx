import React from 'react';
import PropTypes from 'prop-types';

const Domain = ({ domain, selectDomain, gradeSelected, color }) => {
  console.log(color);
  return (
    <div className="grade-level-domains">
      <button
        className={`grade-level-domain ${color}`}
        value={`${gradeSelected}-RP`}
        onClick={selectDomain}
      >{domain}
      </button>
    </div>
  );
};

export default Domain;
