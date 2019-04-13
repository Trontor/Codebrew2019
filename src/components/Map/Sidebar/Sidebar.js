import React from "react";
import "./Sidebar.css";
import Cardlist from "./Cardlist/Cardlist.js";
//import Profile from './Profile/Profile.js';

const Sidebar = props => {
  return (
    <>
      <div className="sidebar">
        <h2 className="sidebar-head">Busking Now</h2>
        <div className="sidebar">
          <Cardlist profiles={props.profiles} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
