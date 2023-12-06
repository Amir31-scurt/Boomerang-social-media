// import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import React, { useEffect, useState, useRef } from 'react';
import NavBar from '../components/NavCompos';
import SideBar from '../components/SidCompos';
import Home from '../pages/Home';
import Search from '../components/search/Search';

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
          <div className="documo col-9 px-5 bg-light">
            {/* Place ////////////////l */}
            <Search />
          </div>
        </div>
        {/********* ConTenu Page **********/}
      </div>
    </div>
  );
}
