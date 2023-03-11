import React from "react";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import "./Sidebar.scss";

function Sidebar() {
  const userRole = useRecoilValue(userRoleState);

  const adminMenu = (
    <div className="sidebar-menu">
      <h4>
        <img src="adminicon" alt="admin"></img>Admin
      </h4>
      <p>_______________________</p>
      <ul className="menu-item">
        <li>
          <a href="/app/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/app/dashboard" disabled>
            Administration
          </a>
        </li>
        <li>
          <a href="/app/dashboard" disabled>
            Training Management
          </a>
        </li>
        <li>
          <a href="/app/dashboard" disabled>
            Settings
          </a>
        </li>
        <li style={{ marginTop: "50px" }}>
          <a href="/app/dashboard" disabled>
            Notifications
          </a>
        </li>
        <li>
          <a href="/app/dashboard" disabled>
            Help
          </a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  );

  const traineeMenu = (
    <>
      <div className="sidebar-menu">
        <h4>
          <img src="traineeicon" alt="icon"></img>Trainee
        </h4>
        <p>_______________________</p>
        <ul className="menu-item">
          <li>
            <a href="/app/myTraining">
              <img src="bookicon" alt="icon"></img>My Learnings
            </a>
          </li>
          <li>
            <a href="/app/myTraining" disabled>
              <img src="charticon" alt="icon"></img>Trainee Progress
            </a>
          </li>
          <li style={{ marginTop: "50px" }}>
            <a className="menu-item" href="/app/myTraining" disabled>
              <img src="bellicon" alt="icon"></img>Notifications
            </a>
          </li>
          <li>
            <a href="/app/myTraining" disabled>
              <img src="helpicon" alt="icon"></img>Help
            </a>
          </li>
          <li>
            <a href="/">
              <img src="logouticon" alt="icon"></img>Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );

  return <nav>{userRole.role === "manager" ? adminMenu : traineeMenu}</nav>;
}

export default Sidebar;
