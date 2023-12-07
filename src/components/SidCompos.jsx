import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';

export default function SideBar() {
  // state///////////
  // SignOut state
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  const SideElem = [
    {
      id: 1,
      icon: (
        <div className="TvIcon">
          <PiTelevisionSimpleBold className="fw-bold" />
        </div>
      ),
      title: 'Profile',
      link: '/profile',
    },
    {
      id: 2,
      icon: (
        <div className="UserIcon">
          <FiUser className="fw-bold" />
        </div>
      ),
      title: 'Settings',
      link: '/settings',
    },
    {
      id: 3,
      icon: (
        <div className="ThunderIcon">
          <AiOutlineThunderbolt className="fw-bold" />
        </div>
      ),
      title: 'View',
      link: '/view',
    },
    {
      id: 4,
      icon: (
        <div className="LogOutIcon">
          <RiLogoutBoxLine />
        </div>
      ),
      onclick: logOut,
      title: 'Logout',
    },
  ];
  const SideMenu = () => {
    return SideElem.map((item, index) => {
      return (
        <li className="nav-item">
          <Link
            className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 link"
            to={item.link}
            key={index}
            onClick={item.onclick}
          >
            <h4 className="SideIcon">{item.icon}</h4>
            <h4 className="SideTitle">{item.title}</h4>
          </Link>
        </li>
      );
    });
  };
  // affichage //////////////
  return (
    <nav class="navigation mx-1 mx-lg-4 scroll-bar">
      <div class="container ps-0 pe-0">
        <div class="nav-content">
          <div class="nav-wrap bg-secondary bg-opacity-25 p-3 rounded rounded-3 shadow-sm pt-3 pb-1 mb-2 mt-2">
            <ul class="mb-1 top-content list-unstyled">{SideMenu()}</ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
