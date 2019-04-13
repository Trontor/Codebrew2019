import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";

class App extends Component {
  state = { profiles: [] };

  handleSpreadsheetData = json => {
    const profiles = json.valueRanges[0].values;
    profiles.shift();
    console.log("Done loading busker profiles");
    this.setState({ profiles });
  };
  componentWillMount() {
    const spreadsheetID = "1TCCq-MSPEEe5mCCTf5o263RNAdZ2M2gtZqDTu8hZhU8";
    const apiKEY = "AIzaSyDulnk0TBfx_gude7ykM-YGr3cvkSj1f1w";
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values:batchGet?key=${apiKEY}&ranges=Sheet1&majorDimension=ROWS`;
    console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(val => this.handleSpreadsheetData(val));
  }
  customProfile = props => {
    return <Profile profiles={this.state.profiles} {...props} />;
  };
  render() {
    return (
      <>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/local" component={Map} />
          <Route exact path="/profile/:id" component={this.customProfile} />
        </HashRouter>
      </>
    );
  }
}

export default App;
