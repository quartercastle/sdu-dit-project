// Framework essential imports
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Style imports
import style from "./App.css";

// Component imports
import BlogCreate from "./Blogs/BlogCreate/BlogCreate";
import BlogList from "./Blogs/BlogList/BlogList";
import Header from './Header/Header'

var hist = createBrowserHistory();

hist.listen(location => {
  // Use setTimeout to make sure this runs after React Router's own listener
  setTimeout(() => {
    // Keep default behavior of restoring scroll position when user:
    // - clicked back button
    // - clicked on a link that programmatically calls `history.goBack()`
    // - manually changed the URL in the address bar (here we might want
    // to scroll to top, but we can't differentiate it from the others)
    if (hist.action === "POP") {
      return;
    }
    // In all other cases, scroll to top
    window.scrollTo(0, 0);
  });
});

export default class App extends Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/BlogCreate" component={BlogCreate} />
          <Route path="/BlogList" component={BlogList} />
          <Route path="/" component={Header} />
        </Switch>
      </Router>
    );
  }
}
