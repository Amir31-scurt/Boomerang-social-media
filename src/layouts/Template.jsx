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
        <div className="col-12 NavBar">
          <NavBar />
        </div>
        <div className="d-flex flex-row LOL">
          <SideBar />
          <div className="mx-4 box-contain">
            <Home />
          </div>
          {/* Place ////////////////l */}
        </div>
      </div>
    </div>
  );
}
