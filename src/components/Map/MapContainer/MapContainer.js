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
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords);
        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    console.log(this.props.profiles);
    if (this.state.loading){
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: "100vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent lat={-37.8138} lng={144.9646} text="My Marker" />
            {this.props.profiles
              .filter(x => x.live === "y")
              .map(val => (
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
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
              imgsrc={require("../../../images/currentpin.png")}
              lat={this.state.userLocation.lat}
              lng={this.state.userLocation.lng}
            />
          <AnyReactComponent lat={-37.8138} lng={144.9646} text="My Marker" />
          {this.props.profiles
            .filter(x => x.live === "y")
            .map(val => (
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
