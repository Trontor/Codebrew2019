import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/Navigation/Navbar";
import { HashRouter, Route } from "react-router-dom";
import Map from "./components/Map/Map";
import Homepage from "./components/Homepage/Homepage";
import Profile from "./components/Profile/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import Featured from "./components/Featured/Featured";

class App extends Component {
  state = { profiles: [] };

  measure = (lat, lon) => {
    // generally used geo measurement function

    const lat1 = -37.804;
    const lon1 = 144.9608;
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat * Math.PI) / 180 - (lat1 * Math.PI) / 180;
    var dLon = (lon * Math.PI) / 180 - (lon1 * Math.PI) / 180;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d * 1000); // meters
  };
  handleSpreadsheetData = json => {
    const profiles = json.valueRanges[0].values;
    const mapped = [];
    profiles.shift();
    profiles.forEach(val => {
      const remapped = {
        id: val[0],
        name: val[1],
        job: val[2],
        location: val[3],
        imageURL: val[4],
        lat: val[5],
        long: val[6],
        desc: val[7],
        live: val[8]
      };
      remapped.distance = this.measure(remapped.lat, remapped.long);
      mapped.push(remapped);
    });
    console.log("Done loading busker profiles");
    this.setState({ profiles: mapped });
  };
  componentWillMount() {
    const spreadsheetID = "1TCCq-MSPEEe5mCCTf5o263RNAdZ2M2gtZqDTu8hZhU8";
    const apiKEY = "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28";
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values:batchGet?key=${apiKEY}&ranges=Sheet1&majorDimension=ROWS`;
    console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(val => this.handleSpreadsheetData(val));
  }
  goLive = () => {
    const spreadsheetID = "1TCCq-MSPEEe5mCCTf5o263RNAdZ2M2gtZqDTu8hZhU8";
    const apiKEY = "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28";
    const updateURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values/I8?key=${apiKEY}`;
  };
  customProfile = props => {
    return <Profile profiles={this.state.profiles} {...props} />;
  };
  customMap = props => {
    return <Map profiles={this.state.profiles} {...props} />;
  };

  customDashboard = props => {
    return <Dashboard {...props} goLive={this.goLive} />;
  };

  customFeatured = props => {
    return <Featured {...props} profiles={this.state.profiles} />;
  };
  render() {
    return (
      <>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/local" component={this.customMap} />
          <Route exact path="/featured" component={this.customFeatured} />
          <Route exact path="/dashboard" component={this.customDashboard} />
          <Route exact path="/profile/:id" component={this.customProfile} />
        </HashRouter>
      </>
    );
  }
}

export default App;
