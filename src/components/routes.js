import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import App from './App';
import Header from './Header';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Header />
        <Route exact path="/" component={ App }/>
        <Route path="/login" component={ Login }/>
      </div>
    );
  }
}

export default Routes;
