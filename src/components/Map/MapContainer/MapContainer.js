import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const onMarkerClick = () => {
  console.log("test");
};
const onInfoWindowClose = () => {
  console.log("test");
};
const MapContainer = props => {
  return (
    <Map google={props.google} zoom={14}         initialCenter={{
      lat: -37.8136,
      lng: 144.9631
     }}>

      <InfoWindow onClose={onInfoWindowClose}>
        <div>
          <h1>test</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28"
})(MapContainer);
