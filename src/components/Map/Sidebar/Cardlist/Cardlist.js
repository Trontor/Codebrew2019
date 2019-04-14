import React from "react";
import "./Cardlist.css";

import Card from "./Card/Card";

/*

*/
const Cardlist = props => {
  if (!props.profiles) {
    return null;
  }
  return (
    <div className="cardlist">
      {props.profiles
        .filter(x => x.live === "y")
        .sort(x => x.distance)
        .reverse()
        .map(val => (
          <Card
            refURL={`/profile/${val.id - 1}`}
            name={val.name}
            job={val.job}
            distance={val.distance}
            src={val.imageURL}
            lat={val.lat}
            long={val.long}
          />
        ))}
    </div>
  );
};

export default Cardlist;
