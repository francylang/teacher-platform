import React from 'react';
// import PropTypes from 'prop-types';

const Domain = ({ domain, selectDomain, domainSelected, color }) => {
  return (
    <div className="grade-level-domains">
      <button
        className={`grade-level-domain ${color}`}
        value={domain}
        onClick={(event) => selectDomain(event)}
      >{domain}
      </button>
    </div>
  );
};

export default Domain;
