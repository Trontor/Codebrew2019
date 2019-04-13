import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="card">
      <div className="row">
        <div className="col-5">
          <img src={props.src} className="img-fluid" />
        </div>
        <div className="col-5">
          <ul className="card-details">
            <li>
              <span className="card-name">{props.name}</span>
            </li>
            <li>
              <span className="card-job">{props.job}</span>
            </li>
            <li>
              <span className="card-dist">{props.distance}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
