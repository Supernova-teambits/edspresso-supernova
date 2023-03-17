import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div class='content' style={{ width: '100%' }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
