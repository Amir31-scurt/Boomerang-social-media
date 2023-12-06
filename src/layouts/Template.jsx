// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
import Home from '../pages/Home';

export default function Template() {
  return (
    <div className="d-flex h-100">
      {/************ SidBar********** */}

      <div className="MainPageContainer">
        {/********NavBar**********/}
        <div className="col-12 border-gray-300 NavBar">
          <NavBar />
        </div>
        <div className="SideAndContainer d-flex row m-0 p-0">
          <div className="col-2 col-lg-3">
            <SideBar />
          </div>
          <div className="col-10 col-lg-9 bg-secondary bg-opacity-25">
            {/* Place ////////////////l */}
            <Home />
          </div>
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
