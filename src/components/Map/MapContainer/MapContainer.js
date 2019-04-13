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
      lat: -37.803962,
      lng: 144.9586299
    },
    zoom: 15
  };

  render() {
    const allNames = [
      {
        name: "Asil Mian",
        job: "Magician",
        distance: "100m",
        src:
          "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-1/p320x320/16174666_1442125722478314_4015656709438205774_n.jpg?_nc_cat=108&_nc_ht=scontent.fcbr1-1.fna&oh=5ea20563aef90898e79cf2f188c88660&oe=5D4AFC15",
        description: "",
        lat: -37.803962,
        lng: 144.9586299
      },
      {
        name: "Tech Lead",
        job: "Tax Evasion Agent",
        distance: "300m",
        src:
          "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB",
        description: "",
        lat: -37.803962,
        lng: 144.9586299
      },
      {
        name: "Asil Mian",
        job: "Magician",
        distance: "100m",
        src:
          "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-1/p320x320/16174666_1442125722478314_4015656709438205774_n.jpg?_nc_cat=108&_nc_ht=scontent.fcbr1-1.fna&oh=5ea20563aef90898e79cf2f188c88660&oe=5D4AFC15",
        description: "",
        lat: -37.8025,
        lng: 144.958629234
      },
      {
        name: "Tech Lead",
        job: "Tax Evasion Agent",
        distance: "300m",
        src:
          "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB",
        description: "",
        lat: -37.803342,
        lng: 144.962234
      }
    ];
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCFERBzLDWtOuCyokpgIN3izhT8wokMG28" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-37.803962}
            lng={144.9586299}
            text="My Marker"
          />
          {allNames.map(val => (
            <AnyReactComponent imgsrc={val.src} lat={val.lat} lng={val.lng} />
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
