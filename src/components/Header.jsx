import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="app-name">Teachzilla</h1>
        <h3 className="sign-out">Sign Out</h3>
      </header>
    );
  }
}

export default Header;
