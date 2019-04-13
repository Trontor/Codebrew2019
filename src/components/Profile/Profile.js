import React, { Component } from "react";
import "./Profile.css";
import DonationCard from "./DonationCard/DonationCard";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { profiles: [] };
  }
  componentWillMount() {
    const spreadsheetID = "1TCCq-MSPEEe5mCCTf5o263RNAdZ2M2gtZqDTu8hZhU8";
    const apiKEY = "AIzaSyDulnk0TBfx_gude7ykM-YGr3cvkSj1f1w";
    const URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetID}/values:batchGet?key=${apiKEY}&ranges=Sheet1&majorDimension=ROWS`;
    console.log(URL);
    fetch(URL)
      .then(res => res.json())
      .then(val => this.handleSpreadsheetData(val));
  }
  titleCase = str => {
    str = str.toLowerCase();
    str = str.split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  };
  handleSpreadsheetData = json => {
    const profiles = json.valueRanges[0].values;
    profiles.shift();
    this.setState({ profiles });
  };

  render() {
    const {
      match: { params }
    } = this.props;
    const id = params.id;
    const selectedProfile = this.state.profiles[id];
    if (!selectedProfile) {
      return null;
    }
    let name, job, location, imageURL, lat, long, desc;
    name = selectedProfile[1];
    job = selectedProfile[2];
    location = selectedProfile[3];
    imageURL = selectedProfile[4];
    lat = selectedProfile[5];
    long = selectedProfile[6];
    desc = selectedProfile[7];
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
      <div class="row h-100">
        {/* <div class="col-12 my-auto">
          <div class="card">Card</div>
        </div> */}
        <div class="card m-auto col-lg-4 col-md-6 col-sm-12 text-center">
          <div class="row user-detail">
            <div class="col-lg-12 col-sm-12 col-12">
              <img
                src={imageURL}
                class="rounded-circle img-thumbnail"
                height="150px"
              />
              <h5>{name}</h5>
              <p>
                <i class="fa fa-map-marker" aria-hidden="true" />{" "}
                {this.titleCase(job)}, {this.titleCase(location)}
              </p>
              <hr />
              <span>
                {desc.split("\n").map((item, i) => {
                  return (
                    <p className="profile-desc-segment" key={i}>
                      {item}
                    </p>
                  );
                })}
              </span>
              <hr />
              <div id="donation-container" class="container-fluid">
                <div class="row flex-row flex-nowrap">
                  {donationInfo.map(info => (
                    <DonationCard info={info} />
                  ))}
                </div>
              </div>
              <hr />
              {/* <a href="#" class="btn btn-success btn-sm">
                Follow
              </a>
              <a href="#" class="btn btn-info btn-sm">
                Send Messege
              </a> */}
            </div>
          </div>
          {/* <div class="row user-social-detail">
            <div class="col-lg-12 col-sm-12 col-12">
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                <i class="fa fa-google-plus" aria-hidden="true" />
              </a>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Profile;
