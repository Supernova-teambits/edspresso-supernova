import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
const backgroundColor = '#373a47';
const color = '#ffffff';
const Layout = () => {
  return (
        <div style={{ display: "flex" }}>
      <div style = {{ backgroundColor: backgroundColor, color: color}}>
        <Header />
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
