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
        <div className="">
          <SideBar />
        </div>
        <div className="SideAndContainer d-flex row m-0 p-0">
          <div className="col-10 offset-2 bg-secondary px-5 bg-opacity-25">
            {/* Place ////////////////l */}
            <Home />
          </div>
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
