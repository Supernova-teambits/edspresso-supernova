import { height } from "@mui/system";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userRoleState } from "../recoil/atoms";
import SideBar from "./SideBar";
import "./Sidebar.scss";

const Layout = () => {
  const userRole = useRecoilValue(userRoleState);
  const setUserRole = useSetRecoilState(userRoleState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userRole) {
      const userData = sessionStorage.getItem("userInfo");
      if (!userData) {
        navigate("/login");
        return;
      }
      setUserRole(JSON.parse(userData));
    }
  });
  return (
    <div className="app-screen" style={{ display: "flex" }}>
      <SideBar />
      <div className="content" style={{ width: "100%", height: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
