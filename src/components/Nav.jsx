import React, { Component } from 'react';
import Search from './Search';
import Filter from './Filter';
import DiscussionForm from './DiscussionForm';

class Nav extends Component {
  render() {
    const { handleSearch, discussions } = this.props
    console.log(discussions);
    return (
      <div className="nav">
        <Search
          handleSearch={handleSearch}
          discussions={discussions}/>
        <Filter />
        <DiscussionForm />
      </div>
    );
  }
}

export default Nav;
