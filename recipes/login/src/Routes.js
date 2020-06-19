import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        {/* Catch all unmatched routes ie: error 404 */}
        <Route>
            <NotFound />
        </Route>
    </Switch>
  );
}