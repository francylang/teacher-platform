import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CardContainer from './CardContainer';
import DiscussionForm from './DiscussionForm';
import App from './App';
import Header from './Header';
import Nav from './Nav';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Header />
        <Nav />
        <Route path="/cardcontainer" component={ App } />
        <Route exact path="/" component={ App }/>
        <Route path="/discussionform" component={ DiscussionForm }/>
        {/* <Route path="/newcorevalue" component={ NewCoreValueContainer }/> */}
        {/* <Route path="/students/:id" component={ CoreValueContainer }/> */}
      </div>
    );
  }
}

export default Routes;
