import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
function NavBar() {
  // state///////////

  // comportement/////////

  // affichage //////////////

  return (
    <header className="d-flex align-items-center justify-content-between px-3 py-4 bg-light">
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
        <form action="#" class="float-left header-search">
          <div className="form-group icon-input">
            <FaMagnifyingGlass className="feather-search font-sm text-secondary" />
            <input
              type="text"
              placeholder="Start typing to search.."
              className="bg-secondary bg-opacity-25 border-0 fs-5 py-2 ps-5 pe-0 pe-lg-3 fs-d1 rounded rounded-5 searchBar"
            />
          </div>
        </form>
        <div className="d-flex gap-3">
          <Link
            to="/Timeline"
            className="p-2 text-center ms-3 menu-icon center-menu-icon"
          >
            <FiHome className="feather-home feather" />
          </Link>
          <Link
            href="default-group.html"
            className="p-2 text-center ms-0 menu-icon center-menu-icon"
          >
            <FaRegUser className="feather-user feather" />
          </Link>
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
    </header>
  );
}

export default NavBar;
