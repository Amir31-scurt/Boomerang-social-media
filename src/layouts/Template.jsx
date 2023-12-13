import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import React, { useContext } from 'react';
import { AuthContext } from '../contexte/authContext';
import { Navigate } from 'react-router-dom';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
import { Outlet } from 'react-router-dom';
import Followfriends from '../components/Followfriends';

export default function Template() {
  // User Invocation
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-100">
      {/*<!-- TimeLine Component --> */}
      <div className="MainPageContainer">
        {/*<!-- Navbar Component --> */}
        <div className="col-12 NavBar">
          <NavBar />
        </div>
        {/*<!-- Sidebar and Page Component --> */}
        <div className="d-flex flex-row LOL ">
          <div className="sidebar">
            {/* <!-- Side navigation --> */}
            <SideBar/>
            {/* <!-- Page content --> */}
          </div>
          <div className="main">
              {/*<!-- TimeLine Component --> */}
              <Outlet />
          </div>
            <div className="sidefriend">
            {/* <!-- Side navigation --> */}
            <Followfriends />
            {/* <!-- Page content --> */}
          </div>
        </div>
      </div>
    </div>
  );
}
