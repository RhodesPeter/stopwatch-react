import React, { Component } from 'react';
import Nav from './Nav.js';

class Info extends Component {

  render() {
    return (
      <div className="info">
        <Nav refs="info"/>
        <div>
          <h3>Stopwatch App built by <a className="underline"
            href="http://rhodespeter.co.uk/">Peter Rhodes</a> with <a className="underline"
              href="https://facebook.github.io/react/">React</a>.
          </h3>
          <h3>GitHub repo <a className="underline"
            href="https://github.com/RhodesPeter/stopwatch-react">here</a>.
          </h3>
        </div>
      </div>
    );
  }
}

export default Info;
