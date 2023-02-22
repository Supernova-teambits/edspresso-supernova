import React from "react";
import  './Sidebar.scss';
const Sidebar = () => {


  return (
    <>
    <div class="sidebar-menu">
      <h4>Trainee</h4>
      <p>_______________________</p>
      <ul>
        <li><a className="menu-item" href="/MyTraining">My Training</a></li>
        <li><a className="menu-item" href="/Dashboard">Trainee Progress</a></li>
        <li><a className="menu-item" href="/Notifications">Notifications</a></li>
        <li><a className="menu-item" href="/Settings">Settings</a></li>
        <li><a className="menu-item" href="/Help">Help</a></li>
        <li><a className="menu-item" href="/">Logout</a></li>
      </ul>
    </div>
    </>
    );
};

export default Sidebar;