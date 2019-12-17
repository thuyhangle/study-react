import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
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
      <div className="page">
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
          <div className="interactions">
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
            >
              Search
            </Search>
          </div>
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

const Search = ({ value, onChange, children }) =>
  <div className="Forms">
    <form>
      <label>{children} </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </form>
  </div>

const Table = ({ list, pattern, onDismiss}) =>
  <div className="table">
    <h3>List of items</h3>
    {list.filter(isSearched(pattern)).map(item => {
      return (
        <div key={item.objectID} className="table-row">
          <span style={{ width: '20%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%' }}>
            {item.author}
          </span>
          <span style={{ width: '10%' }}>
            {item.num_comments}
          </span>
          <span style={{ width: '10%' }}>
            {item.points}
          </span>
          <span style={{ width: '30%' }}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
              >
              Dismiss
            </Button>
          </span>
        </div>
      );
    }
    )}
  </div>

const Button = ({ onClick, className = '', children }) =>
  <button
    onClick={onClick}
    className={className}
    type="button"
  >
    {children}
  </button>

export default App;
