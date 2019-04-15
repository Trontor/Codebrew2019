import "./Navbar.css";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color sticky-top">
        <a
          className="navbar-brand"
          onClick={() => this.props.history.push("/")}
        >
          <img
            src={require("../../images/sombrero_wh.png")}
            height="40"
            alt="Buskie"
          />
        </a>
        <a
          className="navbar-brand"
          onClick={() => this.props.history.push("/")}
        >
          buskie
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" onClick={() => this.props.history.push("/")}>
                <i class="fas fa-home" />
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.history.push("/local")}
              >
                <i class="fas fa-map-marker-alt" />
                Nearby
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.history.push("/featured")}
              >
                <i class="fas fa-star" />
                Featured
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.history.push("/profile")}
              >
                <i class="fas fa-id-badge" />
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                onClick={() => this.props.history.push("/dashboard")}
              >
                <i class="fas fa-tachometer-alt" />
                Dashboard
              </a>
            </li>
          </ul>
          {/* <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink-333"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-user" />
              </a>
              <div
                class="dropdown-menu dropdown-menu-right dropdown-default"
                aria-labelledby="navbarDropdownMenuLink-333"
              >
                {process.env.NODE_ENV === "development" ? (
                  <a
                    className="dropdown-item"
                    onClick={() => this.props.history.push("/profile/7")}
                  >
                    Profile
                  </a>
                ) : null}

                <a
                  className="dropdown-item"
                  onClick={() => this.props.history.push("/dashboard")}
                >
                  Dashboard
                </a>
                <a class="dropdown-item" href="#">
                  Log out
                </a>
              </div>
            </li>
                </ul>*/}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
