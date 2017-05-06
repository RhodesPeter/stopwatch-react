import React, { Component } from 'react';
import Nav from './Nav.js';

class Info extends Component {

  render() {
    return (
      <div className="info">
        <Nav refs="info"/>
        Info here!
      </div>
    );
  }
}

export default Info;
