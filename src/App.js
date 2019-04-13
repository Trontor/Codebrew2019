import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";
import Homepage from "./components/Homepage/Homepage";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/local" component={Map} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
