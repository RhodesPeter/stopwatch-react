import React, { Component } from 'react';
import '../App.css';
import Stopwatch from './Stopwatch.js';

class App extends Component {

  render() {
    return (
      <div className="app">
        <button>New Stopwatch</button>
        <Stopwatch />
      </div>
    );
  }
}

export default App;
