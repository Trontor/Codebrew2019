import React, { Component } from "react";
import "./Profile.css";

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

  handleSpreadsheetData = json => {
    const profiles = json.valueRanges[0].values;
    profiles.shift();
    this.setState({ profiles });
  };

  render() {
    let profile = this.props.src
      ? this.props.src
      : "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB";
    let name = this.props.name ? this.props.name : "Asil";
    let job = this.props.job ? this.props.job : "Faff";

    return (
      <div class="container">
        <div className="card">
          <div className="row">
            <div className="col-5">
              <img src={profile} alt="a picture of" className="img-fluid" />
            </div>
            <div className="col-5">
              <ul className="card-details">
                <li>
                  <span className="card-name">{name}</span>
                </li>
                <li>
                  <span className="card-job">{job}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
