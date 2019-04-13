import React from "react";

const Gencard = props => {
  return (
    <div className="card">
      <div className="row no-gutters">
        <div className="col-auto">
          <img className="img-fluid" src="" />
        </div>
        <div className="col">
          <div className="card-block px-2">
            <h4 className="card-title">Title</h4>
            <p className="card-text">Description</p>
            <a href="#" className="btn btn-primary">
              BUTTON
            </a>
          </div>
        </div>
      </div>
      <div className="card-footer w-100 text-muted">
        Footer stating cats are CUTE little animals
      </div>
    </div>
  );
};
export default Gencard;
