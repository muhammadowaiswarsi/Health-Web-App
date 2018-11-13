import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from 'react-router';
import history from './History';
import Home from './Components/Home'
import SignUp from './Components/SignUp'

class App extends Component {
  render() {
    return (
      <div>
      <Router history={history}>
          <Switch>
              <Route path="/" component={Home} />
              <Route path="/signUp" component={SignUp} />
          </Switch>
      </Router>
  </div >
    );
  }
}

export default App;
