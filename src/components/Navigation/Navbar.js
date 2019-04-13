import "./Navbar.css";
import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark default-color">
        <a class="navbar-brand" href="#">
          <img
            src={require("../../images/sombrero_wh.png")}
            height="40"
            alt="Buskie"
          />
        </a>
        <a class="navbar-brand" href="#">
          Buskie
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#basicExampleNav"
          aria-controls="basicExampleNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="basicExampleNav">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/map">
                Map
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/featured">
                Featured
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/now">
                On Now
              </a>
            </li>

            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div
                class="dropdown-menu dropdown-primary"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>

          <form class="form-inline">
            <div class="md-form my-0">
              <input
                class="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </form>
          <ul class="nav navbar-nav navbar-right">
            {/* <li><a href="#"><span class="glyphicon glyphicon-user  ml-sm-2 mr-sm-2"></span> Sign Up</a></li> */}
            <li><a href="/login"><span class="glyphicon glyphicon-log-in  ml-sm-2  mr-sm-2"></span> Login</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
