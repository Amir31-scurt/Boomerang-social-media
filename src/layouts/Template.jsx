// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Barry.css';

import React, { useContext } from 'react';
import { AuthContext } from '../contexte/authContext';
import { Navigate } from 'react-router-dom';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
// import { UserPage } from '../components/user-page/UserPage';
import Home from '../pages/Home';

export default function Template() {
  // User Invocation
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-100">
      {/************ SidBar********** */}

      <div className="MainPageContainer">
        <div className="col-12 NavBar">
          <NavBar />
        </div>
        <div className="d-flex flex-row LOL">
          <div className="sidebar">
            {/* <!-- Side navigation --> */}
            <SideBar />
            {/* <!-- Page content --> */}
            <div class="main">
              <Home />
            </div>
          </div>
          {/* Place ////////////////l */}
        </div>
      </div>
    </div>
  );
}
