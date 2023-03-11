import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
const Layout = () => {
  return (
        <div style={{ display: "flex" }}>
      <div>
        <Header />
        <SideBar />
      </div>
      <div style={{ marginLeft: '264px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
