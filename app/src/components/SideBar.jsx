import React from "react";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import "./Sidebar.scss";
import {
  User,
  Book,
  GraphDonut,
  Admin,
  Setting,
  Notification,
  Help,
  Logout,
} from "../assets/Icons";
import { Logo } from "../assets/images";

function Sidebar() {
  const userRole = useRecoilValue(userRoleState);

  const adminMenu = (
    <div className="sidebar-menu">
      <div class="logo">
        <Logo />
      </div>
      <h4 class="profile">
        <User fillColor="#FFF0DE" />
        Admin
      </h4>
      <div class="separator"></div>
      <ul className="menu-item">
        <li>
          <GraphDonut fillColor="#FFF0DE" />
          <a href="/app/dashboard">Dashboard</a>
        </li>
        <li>
          <Admin fillColor="#FFF0DE" />
          <a href="/app/dashboard" disabled>
            Administration
          </a>
        </li>
        <li>
          <Book fillColor="#FFF0DE" />
          <a href="/app/dashboard" disabled>
            Training Management
          </a>
        </li>
        <li>
          <Setting fillColor="#FFF0DE" />
          <a href="/app/dashboard" disabled>
            Settings
          </a>
        </li>
        <li style={{ marginTop: "56px" }}>
          <Notification fillColor="#FFF0DE" />
          <a href="/app/dashboard" disabled>
            Notifications
          </a>
        </li>
        <li>
          <Help fillColor="#FFF0DE" />
          <a href="/app/dashboard" disabled>
            Help
          </a>
        </li>
        <li>
          <Logout fillColor="#FFF0DE" />
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  );

  const traineeMenu = (
    <>
      <div className="sidebar-menu">
        <div class="logo">
          <Logo />
        </div>
        <h4 class="profile">
          <User fillColor="#FFF0DE" class="profile" />
          Trainee
        </h4>
        <div class="separator"></div>
        <ul className="menu-item">
          <li>
            <Book fillColor="#FFF0DE" />
            <a href="/app/myTraining">My Learnings</a>
          </li>
          <li>
            <GraphDonut fillColor="#FFF0DE" />
            <a href="/app/myTraining" disabled>
              Trainee Progress
            </a>
          </li>
          <li style={{ marginTop: "50px" }}>
            <Notification fillColor="#FFF0DE" />
            <a className="menu-item" href="/app/myTraining" disabled>
              Notifications
            </a>
          </li>
          <li>
            <Help fillColor="#FFF0DE" />
            <a href="/app/myTraining" disabled>
              Help
            </a>
          </li>
          <li>
            <Logout fillColor="#FFF0DE" />
            <a href="/">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <nav className="sidebar">
      {userRole.role === "manager" ? adminMenu : traineeMenu}
    </nav>
  );
}

export default Sidebar;
