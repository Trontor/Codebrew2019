import React from "react";
import "./Card.css";
import { withRouter } from "react-router";

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
};

const Card = props => {  
  return (
    <div className="card">
      <div className="row ">
        <div className="col-md-2">
          <img src={props.src} className="w-100" />
        </div>
        <div className="col-md-6 px-3 d-flex align-items-center">
          <div className="row">
            <div className="col-12">
              <h4 className="card-title">{props.name}</h4>{" "}
            </div>
            <div className="col-12 info">
              <p>{titleCase(props.job)}</p>  
              <p>{props.distance}m away</p>
            </div>
          </div>
        </div>
        <div className="col-md-4  text-center d-flex align-items-center justify-content-center">
          <a
            onClick={() => props.history.push(props.refURL)}
            className="btn btn-primary"
          >
            Profile
          </a>
          <a className="btn btn-red"
            href={"http://maps.google.com/maps?daddr=" + props.lat + "," + props.long + "&amp;ll="}><i class="fas fa-map-marker-alt"></i></a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
