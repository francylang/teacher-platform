import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ signedInStatus, signOut, setCurrentUser }) => {
  const renderSignOut = () => {
    if (signedInStatus === true) {
      return (
        <Link
          to='/login'
          className="sign-out"
          onClick={() => {
            signOut();
            setCurrentUser('');
          }}
        >
          Sign Out
        </Link>
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
