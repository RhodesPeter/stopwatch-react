import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      timeNow: function(){
        console.log(parseInt(new Date().getMilliseconds() / 10, 10))
        // return new Date().getSeconds() / 1000;
      }
    }
  }

  startTime(){
    const intervalID = setInterval(this.state.timeNow, 10);
  }

  stopTime(){
    window.clearInterval(tom);
  }

  render() {
    return (
      <div className="app">
        <div className="stopwatch">
          <div className="stopwatch__screen">00:00:00:00</div>
          <div className="stopwatch__button" onClick={ this.startTime.bind(this) }>start</div>
          <div className="stopwatch__button" onClick={ this.stopTime.bind(this) }>stop</div>
          <div className="stopwatch__button">reset</div>
        </div>
      </div>
    );
  }
}

export default App;
