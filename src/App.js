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
    console.log('this is:', this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render () {
    const helloWorld = 'Welcome to ReactJS';
    let username = 'Thuy Hang Le';
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className="Init">
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
          </div>
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          />
          <Table
            list={list}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
          <div className="Binding">
            <h3>
              <span>Binding</span>
              <button
                onClick={this.onClickMe.bind(this)}
                type="button"
                >
                Click Me - Binding button - show log
              </button>
            </h3>

          </div>

        </header>
      </div>
    );
  }
}

class Search extends Component {
  render () {
    const { value, onChange} = this.props;
    return (
      <div className="Forms">
        <form>
          <label>Form </label>
          <input
            type="text"
            value={value}
            onChange={this.onSearchChange}
          />
        </form>
      </div>
    );
  }
}

class Table extends Component {
  render () {
    const { list, pattern, onDismiss } = this.props;
    return (
      <div className="List">
        <h3>List of items</h3>
        {list.filter(isSearched(pattern)).map(item => {
          return (
            <li key={item.objectID}>
            <a className="App-link" href={item.url}>{item.title}</a>
            <span>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
              >
              Dismiss
              </button>
            </span>
            <p>Name: <span>{item.author}</span></p>
            <p>Comments: <span>{item.num_comments}</span></p>
            <p>points: <span>{item.points}</span></p>
          </li>
          );
        }
        )}
      </div>
    );
  }
}

export default App;
