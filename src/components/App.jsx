import React, { Component } from 'react';
import Header from './Header';
import Nav from './Nav';
import CardContainer from './CardContainer';

class App extends Component {
  render() {
    return (
      <section className="app">
        <Header />
        <section className="main">
          <Nav />
          <CardContainer />
        </section>
      </section>
    );
  }
}

export default App;
