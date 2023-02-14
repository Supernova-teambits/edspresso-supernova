import React from "react";
import { Outlet } from "react-router-dom";
export class Layout extends React.Component {
  render() {
    return (
      <div>
        <h2>Layout</h2>
        <Outlet />
      </div>
    );
  }
}
