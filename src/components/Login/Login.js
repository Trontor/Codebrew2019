import "./Login.css";
import React, { Component } from "react";

import Facebook from "../Facebook/Facebook";

class Login extends Component {
  handleSubmit = e => {
    this.nextPage();
    e.preventDefault();
  };
  nextPage = () => {
    this.props.history.push("/local");
  };
  componentDidMount() {
    document.getElementById("inputEmail").value = "rohyljoshi@hotmail.com";
    document.getElementById("inputPassword").value = "tester12urfnjw";
  }
  render() {
    return (
      <>
        <div className="login-container">
          <div className="row h-100">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
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
                  <p id="login-subtitle">
                    Supporting Melbourne's Street Artists
                  </p>
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
                      className="btn btn-lg btn-info btn-block text-uppercase"
                      type="submit"
                    >
                    <i className="fas fa-sign-in-alt" style={{marginRight: "10px"}}></i>
                      Sign in
                    </button>
                    <hr className="my-4" />
                    {/* <button
                    className="btn btn-lg btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2" /> Sign in with Google
                  </button> */}
                    {/* <button className="" type="submit"> */}
                    <Facebook onAuth={this.nextPage} />
                    {/* Sign in with Facebook */}
                    {/* </button> */}
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
