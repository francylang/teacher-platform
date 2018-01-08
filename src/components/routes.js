import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer.js';
import AppContainer from '../containers/AppContainer.js';
import HeaderContainer from '../containers/HeaderContainer.js';

class Routes extends Component {
  render() {
    return (
      <div className="routes">
        <HeaderContainer />
        <Route exact path="/" component={ AppContainer }/>
        <Route path="/login" component={ LoginContainer }/>
      </div>
    );
  }
}

export default Routes;
