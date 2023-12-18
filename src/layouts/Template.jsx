import React, { useContext } from 'react';
import { AuthContext } from '../contexte/authContext';
import { Navigate, useLocation } from 'react-router-dom';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
import { Outlet } from 'react-router-dom';
import Followfriends from '../components/Followfriends';

export default function Template() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname);

  // Define the path for the Timeline page
  const timelinePath = '/Timeline'; // Update this to your Timeline page's path

  // Check if the current path is the Timeline page
  const isTimelinePage = location.pathname === timelinePath;

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-100">
      <div className="MainPageContainer">
        <div className="col-12 NavBar">
          <NavBar />
        </div>
        <div className="d-flex flex-row LOL">
          <div className="sidebar">
            <SideBar />
          </div>
          <div className="main">
            <Outlet />
          </div>
          {isTimelinePage && (
            <div className="sidefriend">
              <Followfriends />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
