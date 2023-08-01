import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ListComponent } from "./components";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <Route
          render={({ location }) => (
            <Switch location={location}>
              <Route exact path="/" component={ListComponent} />
              <Redirect to="/" />
            </Switch>
          )}
        />
      </Router>
    );
  }
}
export default App;
