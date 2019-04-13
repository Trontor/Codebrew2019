import React from "react";
import "./Sidebar.css"; 
import Cardlist from './Cardlist/Cardlist.js';
//import Profile from './Profile/Profile.js';



const Sidebar = () => {
  return (
    <>
      <div className="container">
        <h2 className="sidebar-head">Busking Now</h2>
        <div className="sidebar"><Cardlist></Cardlist></div>
      </div>
    </>
  );
};

export default Sidebar;
