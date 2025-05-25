import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--body-background)",
        color: "var(--title)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div className=" min-h-screen text-white overflow-x-hidden">
        <Navbar></Navbar>
        <div className=" mx-auto">
          <Outlet></Outlet>
        </div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
};

export default MainLayout;
