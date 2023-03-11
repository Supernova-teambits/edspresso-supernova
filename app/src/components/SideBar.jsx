import React from 'react';
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import  './Sidebar.scss';
import { User, Book, GraphDonut, Admin, Setting, Notification, Help, Logout } from '../assets/Icons';

function Sidebar() {
  
  const userRole = useRecoilValue(userRoleState);

  const adminMenu = (
    <div class="sidebar-menu" >
      <h4><User fillColor="#FFF0DE"/>Admin</h4>
       <p>_______________________</p>
    <ul class="menu-item">
      <li><GraphDonut fillColor="#FFF0DE"/><a href="/app/dashboard">Dashboard</a></li>
      <li><Admin fillColor="#FFF0DE"/><a href="#" disabled>Administration</a></li>
      <li><Book fillColor="#FFF0DE"/><a href="#" disabled>Training Management</a></li>
      <li><Setting fillColor="#FFF0DE"/><a href="#" disabled>Settings</a></li>
      <li style={{ marginTop: '50px' }}><Notification fillColor="#FFF0DE"/><a href="#" disabled>Notifications</a></li>
      <li><Help fillColor="#FFF0DE"/><a href="#" disabled>Help</a></li>
      <li><Logout fillColor="#FFF0DE"/><a href="/">Logout</a></li>
    </ul>
    </div>
  );

  const traineeMenu = (
    <>
    <div class="sidebar-menu">
       <h4><User fillColor="#FFF0DE"/>Trainee</h4>
       <p>_______________________</p>
       <ul class="menu-item">
         <li><Book fillColor="#FFF0DE"/><a href="/app/myTraining">My Learnings</a></li>
         <li><GraphDonut fillColor="#FFF0DE"/><a href="#" disabled>Trainee Progress</a></li>
         <li style={{ marginTop: '50px' }}><a class="menu-item" href="#" disabled><Notification fillColor="#FFF0DE"/>Notifications</a></li>
         <li><Help fillColor="#FFF0DE"/><a href="#" disabled>Help</a></li>
         <li><Logout fillColor="#FFF0DE"/><a  href="/">Logout</a></li>
       </ul>
     </div>
     </>
  );

  return (
    <nav className='sidebar'>
      {userRole.role === 'manager' ? adminMenu : traineeMenu}
    </nav>
  );
}

export default Sidebar;