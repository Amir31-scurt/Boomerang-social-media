import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../Barry.css";
import profil from "../../assets/images/user.png";
// import { FaVideo } from "react-icons/fa";
// import { FaRegImage } from "react-icons/fa6";

export default function MyPost() {
  // Ce composant crée l'architecture de base d'un post
  return (
    <div className="d-flex flex-column rounded shadow p-3 mb-5 w-100 text-start bg-white">
      {/* En-tete du post__________________________start */}
      <div className="d-flex justify-content-between">
        {/* Photo profil/nom de l'user et date */}
        <div className="d-flex">
          {/* Photo profil */}
          <div className="me-4">
            <img src={profil} alt="photoProfil" className="" width={60} />
          </div>
          {/* Nom user et date */}
          <div className="d-flex flex-column text-start">
            <h2 className="fw-bold fs-5">Name User</h2>
            <p className="text-body-secondary">01/12/2023</p>
          </div>
        </div>
        {/* Action à définir */}
        <div className="my-auto">
          <i class="bi bi-three-dots"></i>
        </div>
      </div>
      {/* ___________________________________________end */}
      {/* Corps du post______________________________start */}
      <div className="d-flex flex-column">
        {/* Contenu textuel du post */}
        <p className="text-body-secondary text-wrap">
          Le contenu textuel ___ Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non
          nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed
          rhoncus
        </p>
        {/* Contenu image du post */}
        <div>
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/11/postnews.jpg?w=1390&crop=1"
            alt="Img poster"
            className="img-fluid"
          />
        </div>
      </div>
      {/* ___________________________________________end */}
      {/* Pied du post_______________________________start */}
      <div className="d-flex justify-content-between">
        {/* Bouton like */}
        <div>
          <button className="btn">
            <i class="bi bi-heart-fill"></i>
          </button>
          <span>0</span> <span>Like</span>
        </div>
        {/* Bouton share */}
        <div>
          <button className="btn">
            <i class="bi bi-share"></i>
          </button>
          <span>Partager</span>
        </div>
      </div>
      {/* ___________________________________________end */}
    </div>
  );
}
