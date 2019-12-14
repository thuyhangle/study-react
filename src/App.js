import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function isSearched(searchTerm) {
  return function (item) {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);

    this.onDismiss = this.onDismiss.bind(this);

    this.onClickMe = this.onClickMe.bind(this);
  }

  onClickMe() {
      console.log(this);
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

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
          <div className="List">
            <h3>List of items</h3>
            {this.state.list.map(item => {
              return (
                <li key={item.objectID}>
                <a className="App-link" href={item.url}>{item.title}</a>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
                <span>
                  <button
                    onClick={() => this.onDismiss(item.objectID)}
                    type="button"
                  >
                  Dismiss
                  </button>
                </span>
              </li>
              );
            }
            )}
          </div>
          <div className="Binding">
            <h3>Binding</h3>
            <button
              onClick={this.onClickMe.bind(this)}
              type="button"
              >
              Click Me - Binding button - show log
            </button>
          </div>
          <div className="Forms">
            <h3>Forms</h3>
            <form>
              <input
                type="text"
                onChange={this.onSearchChange}
              />
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
