import React from "react";
import { NavBar } from "../components/common/NavBar";
import { Footer } from "../components/common/Footer";
import { MainRoutes } from "../router/MainRoutes";

export const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className="bg-gray-300 h-screen">
        <MainRoutes />
      </div>
      <Footer />
    </>
  );
};
