import React, { Component } from 'react';
import '../App.css';
import Stopwatch from './Stopwatch.js';
import Nav from './Nav.js';

class Home extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      watches: [<Stopwatch key={0}/>],
      count: 1
    }
  }

  createNewStopwatch = () => {
    if(this.state.watches.length > 11){ return }
    this.setState({ count: this.state.count + 1 });
    this.state.watches.push( <Stopwatch key={ this.state.count }/> );
    return this.state.watches;
  }

  render() {
    return (
        <div className="app">
          <Nav refs="home" onClick={ this.createNewStopwatch.bind(this) }/>
          {  this.state.watches }
        </div>
    );
  }
}

export default Home;
