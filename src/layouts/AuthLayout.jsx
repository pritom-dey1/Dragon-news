import React from "react";
import Header from "../Components/Header/Header";
import { LatestNews } from "../Components/Header/LatestNews";
import Navbar from "../Components/Header/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <LatestNews />
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;
