import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Plans } from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/planos'>
        <Plans />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
