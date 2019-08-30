import React, { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div className="App">
        <header className="App-header" data-test="app-component">
          <h1 data-test="counter-display">{this.state.counter}</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            data-test="increment-button"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
