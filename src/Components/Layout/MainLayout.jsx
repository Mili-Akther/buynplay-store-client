import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";

const MainLayout = () => {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto ">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
