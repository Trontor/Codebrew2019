import React, { Component } from "react";
import "./Profile.css";


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {props};
    console.log("profile constructed");
  }
  render() {
    console.log("Test")
    let profile = this.props.src;
    console.log(profile);
    if (profile == null){
        profile = "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB";
    }
    return (
      <div className="card">
        <div className="row">
          <div className="col-5">
            <img src={profile} alt="a picture of" className="img-fluid" />
          </div>
          <div className="col-5">
            <ul className="card-details">
              <li>
                <span className="card-name">{this.props.name}</span>
              </li>
              <li>
                <span className="card-job">{this.props.job}</span>
              </li>
              <li>
                <span className="card-dist">{this.props.distance}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;
