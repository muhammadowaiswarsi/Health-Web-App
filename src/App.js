import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router';
import history from './History';
import Home from './Components/Home'
import Search from './Components/Search'
import Profile from './Components/Profile'
import Clinic from './Components/Clinic Detail'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route path="/clinic" component={Clinic} />
        </Switch>
      </Router>
    );
  }
}

export default App;
