import React from 'react';

const Header = ({ signedInStatus }) => {
  const renderSignOut = () => {
    if (signedInStatus === true) {
      console.log('after if');
      return (
        <h3 className="sign-out">Sign Out</h3>
      );
    }
  };

  return (
    <header className="header">
      <h1 className="app-name">Teachzilla</h1>
      {renderSignOut()}
    </header>
  );
};

export default Header;
