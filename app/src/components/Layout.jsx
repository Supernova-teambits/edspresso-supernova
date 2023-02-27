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
      <div>
        <h2>This is the Layout wrapper</h2>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
