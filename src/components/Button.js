import React, { Component } from 'react';

class Button extends Component {

  render() {
    return (
      <div className="buttonContainer">
        <button onClick={ this.createNewStopwatch }>+</button>
      </div>
    );
  }
}

export default Button;
