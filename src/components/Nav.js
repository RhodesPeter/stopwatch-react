import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {
    return (
      <div className="nav">
        <div className="nav__title"><Link to='/'>Stopwatch</Link></div>
        <div className="nav__spacer">&#183;</div>
        <div className="nav__info"><Link to='/info'>Info</Link></div>
        <div className="nav__spacer-two">&#183;</div>
        <Link to='/'><div className="nav__button" onClick={ this.props.onClick }>
        Add Stopwatch<span className="nav__plus">+</span></div></Link>
      </div>
    );
  }
}

export default Nav;
