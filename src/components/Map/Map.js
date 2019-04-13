import React from "react";
import "./Map.css";
import MapContainer from "./MapContainer/MapContainer";
const Map = () => {
  return (
    <div id="mapContainer" class="row h-100">
      <div class="col-md-6">
        <MapContainer />
      </div>
      <div class="col-md-6">test</div>
    </div>
  );
};

export default Map;
