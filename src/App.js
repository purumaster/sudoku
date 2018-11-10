import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./Header";
import Dashboard from "./Dashboard";
import Play from "./Play";
import Contact from "./Contact";
import NotFound from "./NotFound";
import ApiData from "./APIData";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/Play" component={Play} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/api" component={ApiData} />
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
