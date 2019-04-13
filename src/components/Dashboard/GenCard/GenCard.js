import React from "react";

const Gencard = props => {
  return (
    <div class="card">
      <div class="row no-gutters">
        <div class="col-auto">
          <img class="img-fluid" src="" />
        </div>
        <div class="col">
          <div class="card-block px-2">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Description</p>
            <a href="#" class="btn btn-primary">
              BUTTON
            </a>
          </div>
        </div>
      </div>
      <div class="card-footer w-100 text-muted">
        Footer stating cats are CUTE little animals
      </div>
    </div>
  );
};
export default Gencard;
