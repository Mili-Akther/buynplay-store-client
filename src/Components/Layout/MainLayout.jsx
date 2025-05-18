import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-8xl  mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
