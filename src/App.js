import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import LoginScreen from "./Loginscreen";
import Register from "./Register.js"
import Login from "./Login.js"
import Main from "./Main.js"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );

  }
}

export default App;
