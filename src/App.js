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
          <Route path="/" component={Home} />
          <Route path="/List" component={Search} />
          <Route path="/Profile" component={Profile} />
          <Route path="/Clinic" component={Clinic} />
        </Switch>
      </Router>
    );
  }
}

export default App;
