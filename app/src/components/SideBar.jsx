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
      <li><a href="/app/dashboard">Dashboard</a></li>
      <li><a href="#" disabled>Administration</a></li>
      <li><a href="#" disabled>Training Management</a></li>
      <li><a href="#" disabled>Settings</a></li>
      <li style={{ marginTop: '50px' }}><a href="#" disabled>Notifications</a></li>
      <li><a href="#" disabled>Help</a></li>
      <li><a href="/">Logout</a></li>
    </ul>
    </div>
  );

  const traineeMenu = (
    <>
    <div class="sidebar-menu">
       <h4><img src = "traineeicon"></img>Trainee</h4>
       <p>_______________________</p>
       <ul class="menu-item">
         <li><a href="/app/myTraining"><img src = "bookicon"></img>My Learnings</a></li>
         <li><a href="#" disabled><img src = "charticon"></img>Trainee Progress</a></li>
         <li style={{ marginTop: '50px' }}><a class="menu-item" href="#" disabled><img src = "bellicon"></img>Notifications</a></li>
         <li><a href="#" disabled><img src = "helpicon"></img>Help</a></li>
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