import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing.js';
import SignUp from './components/SignUp.js';
import LogIn from './components/LogIn.js';
import NoMatch from './components/NoMatch.js';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default Routes;
