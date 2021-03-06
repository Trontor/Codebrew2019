import "./Homepage.css";
import React, { Component } from "react";
import Navbar from "../Navigation/Navbar";

class Homepage extends Component {
  render() {
    return (
      <div>
        <body id="homepage_body">
          {/* Header */}
          <header className="masthead d-flex">
            <div className="container text-center my-auto">
              <h1 className="mb-1"><mark className="emphasisbg">Buskers Make Melbourne</mark></h1>
              <h3 className="mb-5">
                <em><mark  className="emphasisbg">Experience the local talent</mark></em>
              </h3>
              <a className="btn btn-primary btn-xl js-scroll-trigger" href="/local">
                Find buskers near me
              </a>
            </div>
            <div className="overlay" />
          </header>

          {/* About */}
          <section className="content-section bg-light" id="about">
            <div className="container text-center">
              <div className="row">
                <div className="col-lg-10 mx-auto">
                  <h2>About buskie</h2>
                  <p className="lead mb-5">Can't fine that cool juggler outside Melbourne Central or want more of the groovy beat next to Flinders?  buskie is the place for you.
                   buskie allows you to search your neighbourhood for buskers so that you can connect with and support those dang awesome people</p>
                  <a
                    className="btn btn-dark btn-xl js-scroll-trigger"
                    href="#services"
                  >
                    Support Your Favourite Buskers
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content-section bg-primary text-white text-center"
            id="services"
          >
            {/* Support buskers */}
            <div className="container">
              <div className="content-section-heading">
                <h3 className="text-secondary ">buskie</h3>
                <h2 className="mb-5">For Fans</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="far fa-map" />
                  </span>
                  <h4>
                    <strong>Search</strong>
                  </h4>
                  <p className="text-faded mb-0">Explore the local talent</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="far fa-thumbs-up" />
                  </span>
                  <h4>
                    <strong>Favorited</strong>
                  </h4>
                  <p className="text-faded mb-0">Follow your buskers of choice</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="fas fa-dollar-sign" />
                  </span>
                  <h4>
                    <strong>Donate</strong>
                  </h4>
                  <p className="text-faded mb-0">Support your favourite buskers</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="far fa-comment" />
                  </span>
                  <h4>
                    <strong>Social</strong>
                  </h4>
                  <p className="text-faded mb-0">
                    Connect and get to know them
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content-section text-white text-center"
            id="services"
          >
            {/* For Buskers */}
            <div className="container">
              <div className="content-section-heading">
                <h3 className="text-secondary mb-0">buskie</h3>
                <h2 className="mb-5">For Buskers</h2>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="fa fa-location-arrow" />
                  </span>
                  <h4>
                    <strong>Live</strong>
                  </h4>
                  <p className="text-faded mb-0">Let people find you in real time</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i className="fas fa-arrow-up" />
                  </span>
                  <h4>
                    <strong>Exposure</strong>
                  </h4>
                  <p className="text-faded mb-0">Increase your fan base</p>
                </div>
                <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i class="fas fa-credit-card" />
                  </span>
                  <h4>
                    <strong>Cashless</strong>
                  </h4>
                  <p className="text-faded mb-0">Recieve electronic payments</p>
                </div>
                <div className="col-lg-3 col-md-6">
                  <span className="service-icon rounded-circle mx-auto mb-3">
                    <i class="fas fa-chart-area" />
                  </span>
                  <h4>
                    <strong>Growth</strong>
                  </h4>
                  <p className="text-faded mb-0">
                    Get an overview of your progress
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Portfolio */}
          <section className="content-section" id="portfolio">
            <div className="container-fluid">
              <div className="content-section-heading text-center">
                <h2 className="mb-5" style={{ color: "white" }}>
                  Experience Melbourne's Culture and Soul
                </h2>
              </div>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  />
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active" id="image_1">
                    <div className="carousel-caption d-none d-md-block">
                      <h3 className="display-4">Bourke Street Mall</h3>
                      <p className="lead">Melbourne's Music hub</p>
                    </div>
                  </div>
                  <div className="carousel-item" id="image_2">
                    <div className="carousel-caption d-none d-md-block">
                      <h3 className="display-4">Hardware Lane</h3>
                      <p className="lead">
                        The melting pot of cultures
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item" id="image_3">
                    <div className="carousel-caption d-none d-md-block">
                      <h3 className="display-4">Hosier Lane</h3>
                      <p className="lead">Melbourne's famous street art</p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true" />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
        </body>
      </div>
    );
  }
}

export default Homepage;
