import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ signedInStatus }) => {
  const renderSignOut = () => {
    if (signedInStatus === true) {
      return (
        <h3 className="sign-out">Sign Out</h3>
      );
    }
  };

  return (
    <header className="header">
      <div className="header-icon-container">
        <Link to='/' className="header-link"><h1 className="app-name">Edvice</h1></Link>
        <div className="header-image"></div>
      </div>
      {renderSignOut()}
    </header>
  );
};

Header.propTypes = {
  signedInStatus: PropTypes.bool,
};

export default Header;
