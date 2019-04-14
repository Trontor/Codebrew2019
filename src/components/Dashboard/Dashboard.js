import React, { PureComponent } from "react";
import "./Dashboard.css";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.min.css";
import EarningGraph from "./EarningGraph/EarningGraph";
import AverageEarning from "./AverageEarning/AverageEarning";
import PieAnalytics from "./PieAnalytics/PieAnalytics";
import Gencard from "./GenCard/GenCard";
import QR from "./QR/QR";

// Div Style for the FAB
const divStyle = {
  width: "100px",
  height: "100px",
  background: "#2bbbad"
};
// Text for Go Live button
export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/w6wsrc52/";

  MdAdd = () => {
    return <a onClick={this.props.goLive}>Go Live</a>;
  };
  render() {
    return (
      <div className="row" id="dashboard-root">
        <div id="left-dash" className="col-md-3">
          <div className="row">
            <div className="col-12">
              <div className="col-md-12 ">
                <AverageEarning />
              </div>
              <div className="col-12">
                <QR />
              </div>
            </div>
          </div>
        </div>
        <div id="right-dash" className="col-md-9">
          <div className="blurcontainer" />
          <div className=" row analyticscontainer">
            <div className="col-md-8  ">
              <div className="col-md-12">
                <div className="card text-center">
                  <div className="row">
                    <div className="col-md-12">
                      <p id="dash-name">Matt De Bono</p>
                    </div>
                    <div className="col-4">
                      <img
                        id="matt-image"
                        class="card-img-top"
                        src="https://media.licdn.com/dms/image/C4E03AQHLargWZPEmnA/profile-displayphoto-shrink_800_800/0?e=1560384000&v=beta&t=J8uDYYz2WGa9eSFxG6pKfe2EgXEl8Q-Ul5cLNJQFoT4"
                      />
                    </div>
                    <div className="col-8">
                      <p>
                        Matt De Bono is a lecturer at The University of
                        Melbourne. Alongside his passion for C programming, he
                        is a salsa dancing enthusiast. He hopes to build a
                        career doing what he loves.
                      </p>
                      <a className="btn btn-success btn-sm">Edit Profile</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <EarningGraph />
                  <Fab
                    mainButtonStyles={divStyle}
                    //actionButtonStyles={actionButtonStyles}
                    //position={position}
                    icon={this.MdAdd()}
                    //event={event}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4  " />
            {/* </div>
          <div className="analyticscontainer row">
            <div className="col-md-6 ">
              <div className="col-md-12 " />
            </div>

            <div className="col-md-6 ">
              <div className="col-md-12 ">
                <PieAnalytics />
              </div>
            </div>
          </div>
          <div className="analyticscontainer row">
            <div className="col-md-4">
              <div className="col-md-12  ">
                <Gencard />
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-md-12 ">
                <Gencard />
              </div>
            </div>
            <div className="col-md-4">
              <div className="col-md-12 ">
                <Gencard />
              </div>
            </div>
          </div>*/}
          </div>
        </div>
      </div>
    );
  }
}
