import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./Sidebar.scss";

const Layout = () => {
  return (
    <div class="app-screen" style={{ display: "flex", }}>
      <SideBar />
      <div class="content" style={{ width: "100%" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
