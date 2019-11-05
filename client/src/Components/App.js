// Framework essential imports
import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

// Style imports
import style from "./App.css";

// Component imports
import Header from "./Header/Header"
import PostCreate from "./Posts/PostCreate/PostCreate";
import PostList from "./Posts/PostList/PostList";
import StartPage from './StartPage/StartPage'

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
        <Header />
        <Switch>
          <Route path="/PostCreate" component={PostCreate} />
          <Route path="/PostList" component={PostList} />
          <Route path="/" component={StartPage} />
        </Switch>
      </Router>
    );
  }
}
