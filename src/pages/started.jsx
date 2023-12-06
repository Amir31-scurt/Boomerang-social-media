import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Maria.css';
import Logo from '../assets/images/logo.webp';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Started() {
  const [showSignin, setShowSignin] = useState(false);

  const handleGetStartedClick = () => {
    setShowSignin(true);
  };

  return (
    <div className=" justify-content-center  text-center align-items-center">
      <div className="w-50 m-auto mt-5 scale-up-right">
        <img src={Logo} alt="" className="w-100" />
        <Link to="/Inscription" className="text-white">
          <button
            onClick={handleGetStartedClick}
            className="btn btn-block but text-white"
          >
            GET STARTED
          </button>
        </Link>
      </div>
      {showSignin}
      {/* Afficher le composant 'started' si showSignin est true */}
    </div>
  );
}
