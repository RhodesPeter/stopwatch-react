import React, { Component } from 'react';

class Stopwatch extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      started: false,
      timePassed: 0,
      milliseconds: '00',
      seconds: '00',
      minutes: '00'
    }
  }

  formatter = (input) => {
    const time = input.toString();
    return time.length < 2 ? '0' + time : time.slice(-2);
  }

  formatTime = () => {
    this.setState({
      milliseconds: this.formatter(this.state.timePassed),
      seconds: this.formatter(Math.floor((this.state.timePassed / 100) % 60)),
      minutes: this.formatter(Math.floor((this.state.timePassed / (100 * 60)) % 60))
    });
  }

  timeNow = () => {
    let seconds = parseInt(this.state.timePassed, 10) + 1;
    this.setState({ timePassed: seconds });
    this.formatTime();
  }

  resetTime = () => {
    this.setState({
      timePassed: 0,
      milliseconds: '00',
      seconds: '00',
      minutes: '00'
    });
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

  componentWillUnmount = () => {
    window.clearInterval(this.interval);
  }

  render(){
    return (
      <div className="stopwatch">
        <div className="stopwatch__screen">
          {this.state.minutes}<span className="stopwatch__colon">:</span>
          {this.state.seconds}<span className="stopwatch__colon">:</span>
          {this.state.milliseconds}</div>
        <div className="stopwatch__button" onClick={ this.startTime.bind(this) }>Start</div>
        <div className="stopwatch__button" onClick={ this.stopTime.bind(this) }>Stop</div>
        <div className="stopwatch__button" onClick={ this.resetTime.bind(this) }>Reset</div>
      </div>
    )
  };
}

export default Stopwatch;
