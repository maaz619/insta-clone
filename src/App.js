import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import SignUp from "./Components/loginandsignup/signup";
import Login from "./Components/loginandsignup/login";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
