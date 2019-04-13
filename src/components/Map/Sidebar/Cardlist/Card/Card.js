import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card-body row ">
        <div className="col col-sm-2">
          <img className="busker-icon img-responsive" src={props.src} />
        </div>
        <div className="col-sm-auto img-thumbnail">
          <p className="card-title">{props.name}</p>
          <p className="card-text">{props.description}</p>
          <span className="distance">2km</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
