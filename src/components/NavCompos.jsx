
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import userProfile from '../assets/images/User.png';

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="nav-top">
          <Link to="/Timeline">
            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Boomerang-Logo.svg"
                alt=""
                className="logo"
              />
            </span>
          </Link>
          <span className="nav-menu me-0 ms-2"></span>
        </div>
        <div className="d-flex gap-5 align-items-center">
          <div className="d-flex gap-3">
            <Link
              to="/Timeline"
              className="p-2 text-center ms-3 menu-icon center-menu-icon"
            >
              <FiHome className="feather-home feathers" />
            </Link>
            <div
              href="default-group.html"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <FaRegUser className="feather-user feathers" />
            </div>
            <NavLink
              to="chercher"
              className="p-2 text-center ms-0 menu-icon icon-input"
            >
              <FaMagnifyingGlass className="feathers" />
            </NavLink>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon setting-icon cursor-pointer">
            <CiSettings className="feather-settings feathers" />
          </div>
          <Link to="" className="p-0 ms-3">
            <img
              src={userProfile}
              alt="user"
              className="rounded-circle img-user"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
