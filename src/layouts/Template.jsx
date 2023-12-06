// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../components/NavCompos';
import Body from '../components/Cartes';
import ComposBody from '../components/ComposBody';
import SideBar from '../components/SidCompos';
import Home from '../pages/Home';
import AutreProfile from '../components/AutreProfile';

export default function Template() {
  return (
    <div className="d-flex h-100">
      {/************ SidBar********** */}

      <div className="MainPageContainer">
        {/********NavBar**********/}
        <div className="col-12 border-gray-300 NavBar">
          <NavBar />
        </div>
        <div className="SideAndContainer d-flex">
          <div className="col-3 h-auto route">
            <SideBar />
          </div>
          <div className="documo col-9 px-5 bg-secondary bg-opacity-25">
            {/* Place ////////////////l */}
            <AutreProfile />
          </div>
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
