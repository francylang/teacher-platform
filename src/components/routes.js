import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CardContainer from './CardContainer';
import Header from './Header';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Header />
        <Route path="/cardcontainer" component={ CardContainer } />
        {/* <Route exact path="/" component={ ClassroomContainer }/> */}
        {/* <Route path="/newstudent" component={ NewStudentContainer }/>
        <Route path="/newcorevalue" component={ NewCoreValueContainer }/>
        <Route path="/students/:id" component={ CoreValueContainer }/> */}
      </div>
    );
  }
}

export default Routes;
