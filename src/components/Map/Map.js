import React from "react";
import "./Map.css";
import MapContainer from "./MapContainer/MapContainer";
import Sidebar from "./Sidebar/Sidebar";

const Map = () => {
  return (
    <div id="mapContainer" class="row h-100">
      <div class="col-md-9">
        <MapContainer />
      </div>
      <div class="col-md-3">
        <Sidebar />
      </div>
    </div>
  );
};

export default Map;
