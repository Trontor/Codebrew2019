import React, { Component } from "react";
import "./AverageEarning.css";
import dollar from "./dollar.png"; // Tell Webpack this JS file uses this image

export default class AverageEarning extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body ">
          <h5 class="card-title  title text-success">Total Earning</h5>
          <div class="row mx-auto">
            <div class=" col-md-12 mx-auto">
              <img src={dollar} class="dollarimage mx-auto" />
            </div>
            <div class=" col-md-12 ">
              <div class="col-md-12">
                <h1 class="  ">$1340</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    );
  }
}
