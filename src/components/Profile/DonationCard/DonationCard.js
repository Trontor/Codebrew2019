import React from "react";
import "./DonationCard.css";
import StripeCheckout from "react-stripe-checkout";
const DonationCard = ({ info }) => {
  return (
    <div className="col-lg-9 col-12">
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
            <StripeCheckout
              amount={info.cost * 100}
              billingAddress
              description={"Support this artist"}
              image={require("../../../images/sombrero.png")}
              locale="auto"
              name="Buskie"
              stripeKey="pk_test_B99vYtSnYSRsjN3YnHowMagJ00YsELVzyu"
              token={() => {
                console.log("");
              }}
              zipCode
            >
              <a className="btn btn-success btn-sm">Join ${info.cost} tier</a>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
