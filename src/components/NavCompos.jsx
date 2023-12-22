import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { CiSettings } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { AuthContext } from '../contexte/authContext';
import Logo from '../assets/images/Boomerang Logo.png';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <nav className="navbar fixed-top">
      <div className="container">
        <div className="nav-top">
          <Link to="/Timeline">
            <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0">
              <img src={Logo} alt="logo" className="logo" />
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
            <Link
              to="suivre-profile"
              className="p-2 text-center ms-0 menu-icon center-menu-icon"
            >
              <FaRegUser className="feather-user feathers" />
            </Link>
            <Link
              to="chercher"
              className="p-2 text-center ms-0 menu-icon icon-input"
            >
              <FaMagnifyingGlass className="feathers" />
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center">
          <div className="p-2 text-center ms-3 position-relative dropdown-menu-icon setting-icon cursor-pointer">
            <CiSettings className="feather-settings feathers" />
          </div>
          <Link to="User-Page" className="p-0 ms-3">
            <img
              src={currentUser.photoURL}
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
