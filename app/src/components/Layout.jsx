import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <h2>This is the Layout wrapper</h2>
      <Outlet />
    </div>
  );
};

export default Layout;
