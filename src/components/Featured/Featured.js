import React, { Component } from "react";
import "./Featured.css";

const Featured = props => {
  return (
    <div className="card-columns">
      {props.profiles.map(val => (
        <div class="card">
          <img class="card-img-top" src={val.imageURL} />
          <div class="card-body">
            <h5 class="card-title">{val.name}</h5>
            {val.live === "y" ? (
              <p class="liveFeatured text-success">Live Now</p>
            ) : null}
            <p class="card-text">{val.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
