import React from "react";
import  './Sidebar.scss';
const Sidebar = () => {


  return (
    <>
    <div class="sidebar-menu">
      <h4><img src = "traineeicon"></img>Trainee</h4>
      <p>_______________________</p>
      <ul>
        <li><a className="menu-item" href="/app"><img src = "bookicon"></img>My Learnings</a></li>
        <li><a className="menu-item" href="/Dashboard"><img src = "charticon"></img>Trainee Progress</a></li>
        <li style={{ marginTop: '50px' }}><a className="menu-item" href="/Notifications"><img src = "bellicon"></img>Notifications</a></li>
        <li><a className="menu-item" href="/Help"><img src = "helpicon"></img>Help</a></li>
        <li><a className="menu-item" href="/"><img src = "logouticon"></img>Logout</a></li>
      </ul>
    </div>
    </>
    );
};

export default Sidebar;