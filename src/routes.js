import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Plans } from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/planos'>
        <Plans />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
