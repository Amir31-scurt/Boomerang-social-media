import React from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-top">
          <Link to="/Timeline">
            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Boomerang-Logo.svg"
                alt=""
                width="100px"
              />
            </span>
          </Link>
          <span className="nav-menu me-0 ms-2"></span>
        </div>
        <div className="d-flex gap-5 align-items-center">
          <div className="d-flex gap-3">
            <div
              to="/Timeline"
              className="p-2 text-center ms-3 menu-icon center-menu-icon"
            >
              <FiHome className="feather-home feather" />
            </div>
            <div
              href="default-group.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <FaRegUser className="feather-user feather" />
            </div>
            <div className="p-2 text-center ms-0 menu-icon icon-input">
              <FaMagnifyingGlass className=" feather" />
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon setting-icon cursor-pointer">
            <CiSettings className="feather-settings feather" />
          </div>
          <a href="default-settings.html" className="p-0 ms-3 menu-icon">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user"
              className="rounded rounded-circle"
              width="50px"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
