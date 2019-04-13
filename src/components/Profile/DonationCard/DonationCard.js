import React from "react";
import "./DonationCard.css";

const DonationCard = ({ info }) => {
  return (
    <div className="col-6">
      <div className="card card-block">
        <div className="row">
          <div className="col-12">
            <span className="donation-title">{info.title}</span>
          </div>
          <div className="col-12">
            <span className="donation-cost">
              ${info.cost} per {info.per}
            </span>
            <hr />
          </div>
          {info.description.map(val => (
            <div className="col-12 px-0">
              <span className="donation-info">{val}</span>
            </div>
          ))}
          <div className="col-12 text-center">
            <a href="#" className="btn btn-success btn-sm">
              Join ${info.cost} tier
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
