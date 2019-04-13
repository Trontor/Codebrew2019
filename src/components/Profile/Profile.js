import React, { Component } from "react";
import "./Profile.css";
import DonationCard from "./DonationCard/DonationCard";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profiles: props.profiles };
  }

  titleCase = str => {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };

  render() {
    const {
      match: { params },
      profiles
    } = this.props;
    let id = params.id;

    if (!profiles) {
      return null;
    }
    if (id > profiles.length) {
      id = 0;
    }
    const selectedProfile = profiles[id];
    if (!selectedProfile) {
      return null;
    }
    console.log(selectedProfile);
    let profile = this.props.src
      ? this.props.src
      : "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB";
    const donationInfo = [
      {
        title: "The Generous Passerby",
        cost: 1,
        per: "album",
        description: [
          "A monthly email with updates about what we've been working on"
        ]
      },
      {
        title: "The Art Appreciator",
        cost: 2,
        per: "month",
        description: [
          "Access to the patron feed including: blogs, videos, photos and content."
        ]
      },
      {
        title: "The Bard",
        cost: 10,
        per: "month",
        description: [
          "Access to the patron feed including: blogs, videos, photos and content."
        ]
      }
    ];
    return (
      <div className="row h-100">
        {/* <div className="col-12 my-auto">
          <div className="card">Card</div>
        </div> */}
        <div className="card m-auto col-lg-4 col-md-6 col-sm-12 text-center">
          <div className="row user-detail">
            <div className="col-lg-12 col-sm-12 col-12">
              <img
                src={selectedProfile.imageURL}
                className="rounded-circle img-thumbnail"
                height="150px"
              />
              <h5>{selectedProfile.name}</h5>
              <p>
                <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                {this.titleCase(selectedProfile.job)},{" "}
                {this.titleCase(selectedProfile.location)}
              </p>
              <hr />
              <span>
                {selectedProfile.desc.split("\n").map((item, i) => {
                  return (
                    <p className="profile-desc-segment" key={i}>
                      {item}
                    </p>
                  );
                })}
              </span>
              <hr />
              <div id="donation-container" className="container-fluid">
                <div className="row flex-row flex-nowrap">
                  {donationInfo.map(info => (
                    <DonationCard info={info} />
                  ))}
                </div>
              </div>
              <hr />
              {/* <a href="#" className="btn btn-success btn-sm">
                Follow
              </a>
              <a href="#" className="btn btn-info btn-sm">
                Send Messege
              </a> */}
            </div>
          </div>
          {/* <div className="row user-social-detail">
            <div className="col-lg-12 col-sm-12 col-12">
              <a href="#">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Profile;
