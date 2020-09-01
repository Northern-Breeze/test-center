import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../views/Auth/SignUp";
import SignIn from "../views/Auth/SignIn";
import Home from "../views/Home/Home";
import Bugs from "../views/Bugs/Bugs";
import Tests from "../views/Tests/Tests";
import Metrics from "../views/Metrics";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bugs">
          <Bugs />
        </Route>
        <Route exact path="/tests">
          <Tests />
        </Route>
        <Route exact path="/metrics">
          <Metrics />
        </Route>
        <Route exact path="/register">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
}
