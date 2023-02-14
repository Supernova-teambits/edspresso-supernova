import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { SideBar } from "./SideBar";


export class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SideBar />
        <h2>This is the Layout wrapper</h2>
        <Outlet />
      </div>
    );
  }
}