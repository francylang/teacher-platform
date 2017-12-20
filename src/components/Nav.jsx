import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import DiscussionForm from './DiscussionForm';

class Nav extends Component {
  render() {
    return (
      <div>I AM THE NAV
        <Search />
        <Filter />
        <DiscussionForm />
      </div>
    );
  }
}

export default Nav;
