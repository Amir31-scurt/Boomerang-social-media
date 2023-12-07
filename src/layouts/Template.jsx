// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useContext } from 'react';
import { AuthContext } from '../contexte/authContext';
import { Navigate } from 'react-router-dom';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
import Home from '../pages/Home';

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
        <div className="SideAndContainer d-flex">
          <div className="col-2 col-lg-2">
            <SideBar />
          </div>
          <div className="col-10 col-lg-10 bg-secondary bg-opacity-25">
            {/* Place ////////////////l */}
            <Home />
          </div>
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
