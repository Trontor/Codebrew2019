import React from "react";
import "./Card.css";
import { withRouter } from "react-router";

const Card = props => {
  return (
    <div class="card">
      <div class="row ">
        <div class="col-md-2">
          <img src={props.src} class="w-100" />
        </div>
        <div class="col-md-6 px-3 d-flex align-items-center">
          <div class="row">
            <div class="col-12">
              <h4 class="card-title">{props.name}</h4>{" "}
            </div>
            <div class="col-12">
              <p>{props.distance}m away</p>
            </div>
          </div>
        </div>
        <div class="col-md-4  text-center d-flex align-items-center justify-content-center">
          <a
            onClick={() => props.history.push(props.refURL)}
            class="btn btn-primary"
          >
            Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
