import React from "react";
import "./Map.css";
import MapContainer from "./MapContainer/MapContainer";
import Sidebar from "./Sidebar/Sidebar";

const Map = () => {
  return (
    <div id="mapContainer" class="row">
      <div class="col-md-7">
        <MapContainer />
      </div>
      <div class="col-md-5">
        <Sidebar />
      </div>
    </div>
  );
};

export default Map;
