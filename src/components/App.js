import React, { Component } from 'react';
import '../App.css';
import Stopwatch from './Stopwatch.js';
import Info from './Info.js';
import Home from './Home.js';

import { Switch, Route } from 'react-router-dom'


class App extends Component {

  Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/info' component={ Info }/>
      </Switch>
    </main>
  )

  render() {
    return (
      <this.Main />
    );
  }
}

export default App;
