import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './components/App';
import Info from './components/Info';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ App }/>
      <Route path='/info' component={ Info }/>
    </Switch>
  </main>
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
