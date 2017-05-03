import React, { Component } from 'react';
import '../App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      started: false,
      timePassed: 0
    }
  }

  timeNow = () => {
    let seconds = this.state.timePassed + 1;
    this.setState({ timePassed: seconds });
    console.log(this.state.timePassed)
  }

  resetTime = () => {
    this.setState({ timePassed: 0 });
  }

  startTime = () => {
    if(this.state.started === true){ return; }
    this.interval = setInterval(this.timeNow, 10);
    this.setState({ started: true });
  }

  stopTime = () => {
    window.clearInterval(this.interval);
    this.setState({ started: false });
  }

  render() {
    return (
      <div className="app">
        <div className="stopwatch">
          <div className="stopwatch__screen">00:00:00:00</div>
          <div className="stopwatch__button" onClick={ this.startTime.bind(this) }>start</div>
          <div className="stopwatch__button" onClick={ this.stopTime.bind(this) }>stop</div>
          <div className="stopwatch__button" onClick={ this.resetTime.bind(this) }>reset</div>
        </div>
      </div>
    );
  }
}

export default App;
