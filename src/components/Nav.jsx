import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import DiscussionForm from './DiscussionForm';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Search />
        <Filter />
        <h3 className="sign-out">Sign Out</h3>
      </div>
    );
  }
}

export default Nav;
