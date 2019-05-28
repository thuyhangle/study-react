import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    const helloWorld = 'Welcome to ReactJS';
    let username = 'Thuy Hang Le';
    return (
      <div className="App">
        <header className="App-header">
          <h2>{helloWorld}</h2>
          <h3>Username: {username}</h3>
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
      </div>
    );
  }
}

export default App;
