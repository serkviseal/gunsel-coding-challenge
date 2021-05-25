import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home";
import './../assets/styles/index.scss';

export class App extends Component {
    render() {
        return (
            <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        )
    }
}

export default App
