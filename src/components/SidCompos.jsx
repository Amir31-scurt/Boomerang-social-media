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
    <div class="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
      <div class="nav-caption fw-600 font-xssss text-grey-500">
        <span>New </span>Feeds
      </div>
      <ul class="mb-1 top-content">
        <li class="logo d-none d-xl-block d-lg-block"></li>
        <li>
          <a href="default.html" class="nav-content-bttn open-font">
            <i class="feather-tv btn-round-md bg-blue-gradiant me-3"></i>
            <span>Newsfeed</span>
          </a>
        </li>
        <li>
          <a href="default-badge.html" class="nav-content-bttn open-font">
            <i class="feather-award btn-round-md bg-red-gradiant me-3"></i>
            <span>Badges</span>
          </a>
        </li>
        <li>
          <a href="default-storie.html" class="nav-content-bttn open-font">
            <i class="feather-globe btn-round-md bg-gold-gradiant me-3"></i>
            <span>Explore Stories</span>
          </a>
        </li>
        <li>
          <a href="default-group.html" class="nav-content-bttn open-font">
            <i class="feather-zap btn-round-md bg-mini-gradiant me-3"></i>
            <span>Popular Groups</span>
          </a>
        </li>
        <li>
          <a href="user-page.html" class="nav-content-bttn open-font">
            <i class="feather-user btn-round-md bg-primary-gradiant me-3"></i>
            <span>Author Profile </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
