import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/map" component={Map} />
      </BrowserRouter>
    );
  }
}

export default App;
