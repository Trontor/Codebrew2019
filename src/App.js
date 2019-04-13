import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/local" component={Map} />
          <Route exact path="/profile" component={Profile} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
