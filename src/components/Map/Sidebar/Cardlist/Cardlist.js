import React from "react";
import "./Cardlist.css";

import Card from "./Card/Card";

/*

*/
const Cardlist = () => {
  const allNames = [
    {
      name: "Asil Mian",
      distance: "100m",
      src:
        "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-1/p320x320/16174666_1442125722478314_4015656709438205774_n.jpg?_nc_cat=108&_nc_ht=scontent.fcbr1-1.fna&oh=5ea20563aef90898e79cf2f188c88660&oe=5D4AFC15",
      description: ""
    },
    {
      name: "Tech Lead",
      distance: "300m",
      src:
        "https://scontent.fcbr1-1.fna.fbcdn.net/v/t1.0-9/14729388_1324492154241672_9117299267633054598_n.jpg?_nc_cat=104&_nc_ht=scontent.fcbr1-1.fna&oh=371476194b3479a56a1a72333ef65553&oe=5D3DADDB",
      description: ""
    }
  ];
  return (
    <div>
      {allNames.map(val => (
        <Card name={val.name} distance={val.distance} src={val.src} />
      ))}
    </div>
  );
};

export default Cardlist;
