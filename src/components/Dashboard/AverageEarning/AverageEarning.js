import React, { Component } from "react";
import "./AverageEarning.css";
import dollar from "./dollar.png"; // Tell Webpack this JS file uses this image

export default class AverageEarning extends Component {
  render() {
    return (
      <div className="card">
        <div className="py-2 text-center">
          <h5 className="card-title title text-success">Total Earning</h5>

          {/* <img src={dollar} className="dollarimage mx-auto" /> */}
          <h1 className="d-inline avgearning px-3">{"    $"}1340</h1>
          <p>from 1547 patrons</p>
        </div>

        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    );
  }
}
