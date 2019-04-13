import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <HashRouter>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/map" component={Map} />
        </HashRouter>
      </>
    );
  }
}

export default App;
