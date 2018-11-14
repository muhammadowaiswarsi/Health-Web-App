import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router';
import history from './History';
import Home from './Components/Home'
import Search from './Components/Search'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default App;
