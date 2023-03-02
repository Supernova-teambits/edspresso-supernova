import React from 'react';
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import  './Sidebar.scss';

function Sidebar() {
  
  const userRole = useRecoilValue(userRoleState);

  const adminMenu = (
    <div class="sidebar-menu" >
      <h4><img src = "adminicon"></img>Admin</h4>
       <p>_______________________</p>
    <ul class="menu-item">
      <li><a href="/dashboard">Dashboard</a></li>
      <li><a href="/administration">Administration</a></li>
      <li><a href="/analytics">Analytics</a></li>
      <li><a href="/management">Training Management</a></li>
      <li><a href="/settings">Settings</a></li>
      <li style={{ marginTop: '50px' }}><a href="/notifications">Notifications</a></li>
      <li><a href="/help">Help</a></li>
      <li><a href="/logout">Logout</a></li>
    </ul>
    </div>
  );

  const traineeMenu = (
    <>
    <div class="sidebar-menu">
       <h4><img src = "traineeicon"></img>Trainee</h4>
       <p>_______________________</p>
       <ul class="menu-item">
         <li><a href="/app"><img src = "bookicon"></img>My Learnings</a></li>
         <li><a href="/Dashboard"><img src = "charticon"></img>Trainee Progress</a></li>
         <li style={{ marginTop: '50px' }}><a class="menu-item" href="/Notifications"><img src = "bellicon"></img>Notifications</a></li>
         <li><a href="/Help"><img src = "helpicon"></img>Help</a></li>
         <li><a  href="/"><img src = "logouticon"></img>Logout</a></li>
       </ul>
     </div>
     </>
  );

  return (
    <nav>
      {userRole.role === 'manager' ? adminMenu : traineeMenu}
    </nav>
  );
}

export default Sidebar;