import React, { PureComponent } from "react";
import "./Dashboard.css";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.min.css";
import EarningGraph from "./EarningGraph/EarningGraph";
import AverageEarning from "./AverageEarning/AverageEarning";
import PieAnalytics from "./PieAnalytics/PieAnalytics";
import Gencard from "./GenCard/GenCard";

// Div Style for the FAB
const divStyle = {
  width: "100px",
  height: "100px",
  background: "#2bbbad"
};
// Text for Go Live button
const MdAdd = () => {
  return <div>Go Live</div>;
};
export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/w6wsrc52/";

  render() {
    return (
      <div className="row">
        <div class="col-md-3" />
        <div className="col-md-9">
          <div className="blurcontainer" />
          <div className=" row analyticscontainer">
            <div className="col-md-8  ">
              <div className="col-md-12 holder">
                <EarningGraph />
                <Fab
                  mainButtonStyles={divStyle}
                  //actionButtonStyles={actionButtonStyles}
                  //position={position}
                  icon={<MdAdd />}
                  //event={event}
                />
              </div>
            </div>
            <div className="col-md-4  ">
              <div className="col-md-12 ">
                <AverageEarning />
              </div>
            </div>
          </div>
          <div className="analyticscontainer row">
            <div className="col-md-6 ">
              <div className="col-md-12 " />
            </div>

            <div className="col-md-6 ">
              <div className="col-md-12 holder">
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
          </div>
        </div>
      </div>
    );
  }
}
