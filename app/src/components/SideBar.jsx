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
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
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
          <li
            className={selectedMenuItem === "dashboard" ? "selected" : ""}
            onClick={() => setSelectedMenuItem("dashboard")}
          >
            <div className="hide-icon">
              <GraphDonut fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <GraphDonut fillColor="#10494C" />
            </div>
            <a href="/app/dashboard">Dashboard</a>
          </li>
          <li>
            <div className="hide-icon">
              <AdminNav fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <AdminNav fillColor="#10494C" />
            </div>
            <a href="/app" onClick={(e) => e.preventDefault()}>
              Administration
            </a>
          </li>
          <li>
            <div className="hide-icon">
              <Book fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <Book fillColor="#10494C" />
            </div>
            <a href="/app" onClick={(e) => e.preventDefault()}>
              Training Management
            </a>
          </li>
          <li>
            <div className="hide-icon">
              <Setting fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <Setting fillColor="#10494C" />
            </div>
            <a href="/app" onClick={(e) => e.preventDefault()}>
              Settings
            </a>
          </li>
          <li style={{ marginTop: "32px" }}>
            <div className="hide-icon">
              <Notification fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <Notification fillColor="#10494C" />
            </div>
            <a href="/app" onClick={(e) => e.preventDefault()}>
              Notifications
            </a>
          </li>
          <li>
            <div className="hide-icon">
              <Help fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <Help fillColor="#10494C" />
            </div>
            <a href="/app" onClick={(e) => e.preventDefault()}>
              Help
            </a>
          </li>
          <li>
            <div className="hide-icon">
              <Logout fillColor="#FFF0DE" />
            </div>
            <div className="hover-icon">
              <Logout fillColor="#10494C" />
            </div>
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
            <div className="list">
              <li>
                <div className="hide-icon">
                  <Book fillColor="#FFF0DE" />
                </div>
                <div className="hover-icon">
                  <Book fillColor="#10494C" />
                </div>
                <a href="/app/myTraining">My Learnings</a>
              </li>
            </div>
            <li>
              <div className="hide-icon">
                <GraphDonut fillColor="#FFF0DE" />
              </div>
              <div className="hover-icon">
                <GraphDonut fillColor="#10494C" />
              </div>
              <a href="/app" onClick={(e) => e.preventDefault()}>
                Trainee Progress
              </a>
            </li>
            <li style={{ marginTop: "32px" }}>
              <div className="hide-icon">
                <Notification fillColor="#FFF0DE" />
              </div>
              <div className="hover-icon">
                <Notification fillColor="#10494C" />
              </div>
              <a href="/app" onClick={(e) => e.preventDefault()}>
                Notifications
              </a>
            </li>
            <li>
              <div className="hide-icon">
                <Help fillColor="#FFF0DE" />
              </div>
              <div className="hover-icon">
                <Help fillColor="#10494C" />
              </div>
              <a href="/app" onClick={(e) => e.preventDefault()}>
                Help
              </a>
            </li>
            <li>
              <div className="hide-icon">
                <Logout fillColor="#FFF0DE" />
              </div>
              <div className="hover-icon">
                <Logout fillColor="#10494C" />
              </div>
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

      <nav className={isNavExpanded ? "sidebar expanded" : "sidebar"}>
        {userRole.role === "manager" ? adminMenu : traineeMenu}
      </nav>
    </>
  );
}

export default Sidebar;
