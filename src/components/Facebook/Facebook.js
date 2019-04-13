import FacebookLogin from "react-facebook-login";
import React, { Component } from "react";
import "./Facebook.css";

class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };
  render() {
    let fbContent;
    if (!this.state.isLoggedIn) {
      fbContent = (
        <FacebookLogin
          appId="2298847660435681"
          autoLoad={false}
          fields="name,email,picture"
          onClick={() => {}}
          cssClass="btn btn-lg btn-primary btn-block text-uppercase "
          callback={res => {
            console.log(res);
            this.props.onAuth();
          }}
        />
      );
    } else {
      fbContent = null;
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
