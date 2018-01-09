import React from 'react';
import PropTypes from 'prop-types';

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

Domain.propTypes = {
  domain: PropTypes.string,
  selectDomain: PropTypes.func,
  domainSelected: PropTypes.string,
  color: PropTypes.string
};

export default Domain;
