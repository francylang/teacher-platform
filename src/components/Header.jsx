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
      <Link to='/'><h1 className="app-name">Teachzilla</h1></Link>
      {renderSignOut()}
    </header>
  );
};

Header.propTypes = {
  signedInStatus: PropTypes.bool,
};

export default Header;
