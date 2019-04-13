import "./Login.css";
import React, { Component } from "react";

import Facebook from "../Facebook/Facebook";

class Login extends Component {
  handleSubmit = e => {
    console.log("test");
    this.props.history.push("/login");
    e.preventDefault();
  };
  componentDidMount() {
    document.getElementById("inputEmail").value = "rohyljoshi@hotmail.com";
    document.getElementById("inputPassword").value = "tester12urfnjw";
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div
              className="col-sm-9 col-md-7 col-lg-5 mx-auto"
              style={{ marginTop: 0 }}
            >
              <div className="card card-signin my-3">
                <div
                  className="col-12 text-center"
                  style={{ marginTop: "20px", marginBottom: "0px" }}
                >
                  <img
                    src={require("../../images/sombrero.png")}
                    height="150px"
                  />
                  <p className="buskie">Buskie</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">Sign In</h5>
                  <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        autoFocus
                      />
                      <label htmlFor="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                      <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <label htmlFor="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck1"
                      >
                        Remember password
                      </label>
                    </div>
                    <button
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                      type="submit"
                    >
                      Sign in
                    </button>
                    <hr className="my-4" />
                    {/* <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Sign in with Google
                  </button> */}
                    <button
                      className="btn btn-lg btn-facebook btn-block text-uppercase"
                      type="submit"
                    >
                      <Facebook />
                      {/* Sign in with Facebook */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
