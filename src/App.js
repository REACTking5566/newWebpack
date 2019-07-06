import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test1 from './projectSection/test1'
import '../src/scss/common.scss';
import '../src/scss/reset.scss';
import '../src/scss/rwd.scss';
import '../src/scss/index.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
               </a>
        </header>
        <div className="projectSection">
          <Test1></Test1>
        </div>
      </div>
    );
  }
}

export default App;
