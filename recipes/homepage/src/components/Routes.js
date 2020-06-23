import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import homepage from "./homepage";
import history from './history';


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={homepage} />
                </Switch>
            </Router>
        )
    }
}