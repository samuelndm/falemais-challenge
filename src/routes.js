import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, PlansPage } from "./pages";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/planos'>
        <PlansPage />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
