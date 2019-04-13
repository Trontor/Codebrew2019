import "./Homepage.css";
import React, { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <div>
        <body id="homepage_body">
          {/* Header */}
          <header class="masthead d-flex">
            <div class="container-home text-center my-auto">
              <h1 class="mb-1">Buskie</h1>
              <h3 class="mb-5">
                <em>Sentence description of buskie</em>
              </h3>
              <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">
                Find Out More
              </a>
            </div>
            <div class="overlay" />
          </header>

          {/* About */}
          <section class="content-section bg-light" id="about">
            <div class="container-home text-center">
              <div class="row">
                <div class="col-lg-10 mx-auto">
                  <h2>About Buskie Title Placeholder</h2>
                  <p class="lead mb-5">About Buskie paragraph</p>
                  <a
                    class="btn btn-dark btn-xl js-scroll-trigger"
                    href="#services"
                  >
                    Support Your Favourite Buskers
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            class="content-section bg-primary text-white text-center"
            id="services"
          >
            <div class="container-home">
              <div class="content-section-heading">
                <h3 class="text-secondary mb-0">Fans</h3>
                <h2 class="mb-5">Buskers</h2>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="far fa-map" />
                  </span>
                  <h4>
                    <strong>Search</strong>
                  </h4>
                  <p class="text-faded mb-0">Find your favourite buskers</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
                  <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="fas fa-dollar-sign" />
                  </span>
                  <h4>
                    <strong>Donate</strong>
                  </h4>
                  <p class="text-faded mb-0">Support your favourite buskers</p>
                </div>
                <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
                  <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="far fa-thumbs-up" />
                  </span>
                  <h4>
                    <strong>Favorited</strong>
                  </h4>
                  <p class="text-faded mb-0">Follow your favourite buskers</p>
                </div>
                <div class="col-lg-3 col-md-6">
                  <span class="service-icon rounded-circle mx-auto mb-3">
                    <i class="far fa-comment" />
                  </span>
                  <h4>
                    <strong>Social</strong>
                  </h4>
                  <p class="text-faded mb-0">
                    Get to know your favourite buskers
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio */}
          <section class="content-section" id="portfolio">
            <div class="container-home-fluid">
              <div class="content-section-heading text-center">
                <h3 class="mb-0" style={{ color: "black" }}>
                  Culture
                </h3>
                <h2 class="mb-5" style={{ color: "white" }}>
                  Melbourne
                </h2>
              </div>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
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
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active" id="image_1">
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="display-4">Street Performer</h3>
                      <p class="lead">Placeholder text</p>
                    </div>
                  </div>
                  <div class="carousel-item" id="image_2">
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="display-4">Hardware Lane</h3>
                      <p class="lead">
                        Melbourne's classiest, most European laneway
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item" id="image_3">
                    <div class="carousel-caption d-none d-md-block">
                      <h3 class="display-4">Hosier Lane</h3>
                      <p class="lead">Melbourne's famous street art</p>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon" aria-hidden="true" />
                  <span class="sr-only">Next</span>
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
