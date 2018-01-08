import React from 'react';
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

export default Header;
