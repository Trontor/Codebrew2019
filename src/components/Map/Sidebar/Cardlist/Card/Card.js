import React from "react";
import "./Card.css";
const Card = props => {
  return (
    <div className="card m-2" style={{ width: "100%" }}>
      <div className="card-body row px-3 ">
        <div className="col-lg-3 w-100 h-100">
          <img src={props.src} className="img-fluid" />
        </div>
        <div className="col-lg-9 align-middle">
          <span className="m-auto">{props.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
