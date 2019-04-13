import React from "react";
import "./Map.css";
import MapContainer from "./MapContainer/MapContainer";
import Sidebar from "./Sidebar/Sidebar";

const Map = props => {
  if (!props.profiles) {
    return null;
  }
  return (
    <div id="mapContainer" className="row">
      <div className="col-md-7">
        <MapContainer profiles={props.profiles} />
      </div>
      <div className="col-md-5">
        <Sidebar profiles={props.profiles} />
      </div>
    </div>
  );
};

export default Map;
