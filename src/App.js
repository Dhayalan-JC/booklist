import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
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
          render={() => (
            <>
              <Route exact path="/" component={ListComponent} />
              <Redirect to="/" />
            </>
          )}
        />
      </Router>
    );
  }
}
export default App;
