import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.js';
import AppContainer from '../containers/AppContainer.js';
import Header from './Header';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <Header />
        <Route exact path="/" component={ AppContainer }/>
        <Route path="/login" component={ LoginContainer }/>
      </div>
    );
  }
}

export default Routes;
