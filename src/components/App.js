import React, { Component } from 'react';
import '../App.css';
import Stopwatch from './Stopwatch.js';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      watches: [<Stopwatch key={0}/>],
      count: 1
    }
  }

  createNewStopwatch = () => {
    this.setState({ count: this.state.count + 1 });
    this.state.watches.push( <Stopwatch key={ this.state.count }/> );
    return this.state.watches;
  }

  render() {
    return (
      <div className="app">
        <button onClick={ this.createNewStopwatch }>+</button>
        {  this.state.watches }
      </div>
    );
  }
}

export default App;
