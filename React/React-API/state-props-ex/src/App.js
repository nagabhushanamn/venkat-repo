import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import HitButton from './components/HitButton';
import Display from './components/Display';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('App instance created')
    this.state = {
      count: 1
    }
  }

  incrementCount(incBy) {
    console.log("inc...");
    this.setState({ count: incBy + this.state.count });
  }

  render() {
    console.log('App:render()');
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <div className="page-header"> React - API </div>

        <div className="container well">

          <HitButton label={1} color="" onKick={this.incrementCount.bind(this)} />
          <HitButton label={10} color="" onKick={this.incrementCount.bind(this)} />


          <hr />

          <Display value={this.state.count} />

        </div>

      </div>
    );
  }
}

export default App;
