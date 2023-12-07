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
        <li className="">
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
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/newsfeed">Newsfeed</Link>
        </li>
        <SideMenu />
      </ul>
    </div>
  );
}
