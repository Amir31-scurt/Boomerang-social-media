import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Maria.css';
import Logo from '../assets/images/logo.webp';

export function Started() {

  return (
    <div className=" justify-content-center  text-center align-items-center">
      <div className="w-50 m-auto mt-5 scale-up-right">
        <img src={Logo} alt="" className="w-100" />
      </div>
     
      {/* Afficher le composant 'started' si showSignin est true */}
    </div>
  );
}
