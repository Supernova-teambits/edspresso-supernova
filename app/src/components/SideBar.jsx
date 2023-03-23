import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { userRoleState } from "../recoil/atoms";
import "./Sidebar.scss";
import {
  Book,
  GraphDonut,
  UserNav,
  Setting,
  Notification,
  Help,
  Logout,
  Navigation,
  BackNav,
  AdminNav,
} from "../assets/Icons";
import { Logo } from "../assets/images";

function Sidebar() {
  const userRole = useRecoilValue(userRoleState);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const showSidebar = () => setIsNavExpanded(!isNavExpanded);

  const adminMenu = (
    <div className="sidebar-wrapper">
      <div className="sidebar-menu">
        <div className="logo">
          <Logo />
        </div>
        <h4 className="profile">
          <UserNav fillColor="#FFF0DE" />
          Admin
        </h4>
        <div style={{ display: "flex" }}>
          <div className="separator"></div>
          <div className="back-nav" onClick={() => setIsNavExpanded(false)}>
            <BackNav fillColor={"#10494C"} />
          </div>
        </div>
        <ul className="menu-item">
          <li>
            <GraphDonut fillColor="#FFF0DE" />
            <a href="/app/dashboard">Dashboard</a>
          </li>
          <li>
            <AdminNav fillColor="#FFF0DE" />
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
    </div>
  );

  const traineeMenu = (
    <>
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="logo">
            <Logo />
          </div>
          <h4 className="profile">
            <UserNav fillColor="#FFF0DE" className="profile" />
            Trainee
          </h4>
          <div style={{ display: "flex" }}>
          <div className="separator"></div>
          <div className="back-nav" onClick={() => setIsNavExpanded(false)}>
            <BackNav fillColor={"#10494C"} />
          </div>
        </div>
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
      </div>
    </>
  );

  return (
    <>
      <div className="mobile-menu">
        <div className="hamburger" onClick={showSidebar}>
          <Navigation fillColor={"#FFF0DE"} className="nav" />
        </div>
        <Logo className="mob-logo" />
        <Notification fillColor={"#FFF0DE"} />
      </div>

      <div className={isNavExpanded ? "sidebar expanded" : "sidebar"}>
        <nav className="sidebar">
          {userRole.role === "manager" ? adminMenu : traineeMenu}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;

