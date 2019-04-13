import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./MapContainer.css";

const AnyReactComponent = ({ imgsrc }) => (
  <div>
    <div className="roundedmarker">
      <img className="markerimg" src={imgsrc} />
    </div>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -37.8138,
      lng: 144.9646
    },
    zoom: 16
  };

  render() {
    console.log(this.props.profiles);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={-37.8138} lng={144.9646} text="My Marker" />
          {this.props.profiles.map(val => (
            <AnyReactComponent
              imgsrc={val.imageURL}
              lat={val.lat}
              lng={val.long}
            />
          ))}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
/*  {allNames.map(val => (
            <AnyReactComponent lat={val.lat} lng={val.lng} text="My marker" />
          ))}
          ; */
