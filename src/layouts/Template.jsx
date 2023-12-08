// import React, { useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavCompos";
import SideBar from "../components/SidCompos";
import { AuthContext } from "../contexte/authContext";
import Home from "../pages/Home";

export default function Template() {
  // User Invocation
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="d-flex h-100">
      {/************ SidBar********** */}

      <div className="MainPageContainer">
        {/********NavBar**********/}
        <div className="col-12 border-gray-300 NavBar">
          <NavBar />
        </div>
        <SideBar />
        <div className="col-10 col-md-12 offset-2 offset-md-4 px-3 bg-secondary bg-opacity-25">
          {/* Place ////////////////l */}
          <Home />
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
