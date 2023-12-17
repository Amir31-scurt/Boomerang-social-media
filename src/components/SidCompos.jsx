import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { AiFillEdit } from 'react-icons/ai';

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
          <PiTelevisionSimpleBold className="fw-normal" />
        </div>
      ),
      title: 'Actualité',
      link: '/Timeline',
    },
    {
      id: 2,
      icon: (
        <div className="UserIcon">
          <FiUser className="fw-bold" />
        </div>
      ),
      title: 'Compte',
      link: 'User-Page',
    },
    {
      id: 3,
      icon: (
        <div className="ThunderIcon">
          <AiFillEdit className="fw-bold" />
        </div>
      ),
      title: 'Poster',
      link: '/Timeline',
      onclick: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
    {
      id: 4,
      icon: (
        <div className="LogOutIcon">
          <RiLogoutBoxLine />
        </div>
      ),
      onclick: logOut,
      title: 'Déconnexion',
    },
  ];
  const SideMenu = () => {
    return SideElem.map((item, index) => {
      return (
        <li className="nav-item" key={item.id}>
          <Link
            className="d-flex align-items-center justify-content-center justify-content-lg-start gap-3 link"
            to={item.link}
            onClick={item.onclick}
          >
            <h4 className="SideIcon">{item.icon}</h4>
            <h5 className="SideTitle">{item.title}</h5>
          </Link>
        </li>
      );
    });
  };
  // affichage //////////////
  return (
    <div>
      {/* <!-- Side navigation --> */}
      <div className="sidenav sideComp">
        <ul className="Cloning">
          <SideMenu />
        </ul>
        {/* <ul>
          <SideMenu />
        </ul> */}
      </div>
    </div>
  );
}
