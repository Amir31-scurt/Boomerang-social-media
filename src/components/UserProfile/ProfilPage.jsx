import React, { useState, useEffect, useContext } from 'react';
import Profile from './Profile';
import { CgMore } from 'react-icons/cg';
import { PostImageProfile } from './PostImageProfile';
import '../../assets/css/Profile.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../config/firebase-config.js';
import { AuthContext } from '../../contexte/authContext.js';
import { usePostActions } from '../ComposTimeLine/postActions/usePostActions';

function ProfilPage() {
  const { handleLikePost, DeletePost, handleEdit } = usePostActions();
  const { currentUser } = useContext(AuthContext);

  // Utilisation de useState pour gérer l'URL de l'image de profil
  const [profileImageUrl, setProfileImageUrl] = useState(() => {
    // Récupérer l'URL de l'image depuis le localStorage lors du montage du composant
    const storedImageUrl = localStorage.getItem('profileImageUrl');
    return storedImageUrl || 'https://your-default-image-url.jpg';
  });

  // Utilisation de useState pour gérer l'onglet actif par défaut
  const [activeTab, setActiveTab] = useState('images');

  // Utilisation de useEffect pour sauvegarder l'URL de l'image dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('profileImageUrl', profileImageUrl);
  }, [profileImageUrl]);

  // Fonction pour gérer le changement de la photo de profil
  const handleChangeProfileImage = async (event) => {
    const file = event.target.files[0];

    // Vérifier si un fichier a été sélectionné
    if (file) {
      // Création d'une référence vers le stockage Firebase avec un nom unique basé sur UUID
      const storageRef = ref(storage, `profileImages/${uuidv4()}-${file.name}`);

      try {
        // importation du fichier vers le stockage Firebase
        await uploadBytes(storageRef, file);

        // Obtenir l'URL de téléchargement du fichier importer
        const downloadURL = await getDownloadURL(storageRef);

        // Mettre à jour l'état avec la nouvelle URL de l'image
        setProfileImageUrl(downloadURL);
      } catch (error) {
        console.error('Error uploading image to Firebase Storage:', error);
      }
    }
  };

  // Fonction pour gérer les clic des buttons images, videos et posts
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ProfilPage mt-4">
      <div className="container">
        <div className="bg-white shadow-sm rounded-4 page-profil">
          <div className="Profil-img p-3">
            <div className="container my-3">
              <div className="rounded-5 bg-white">
                <input
                  src={currentUser.Banner}
                  alt=""
                  type="image"
                  className="img-fluid rounded-5 w-100 banner"
                />
              </div>
            </div>
          </div>
          <div className=" d-flex justify-content-between pb-4 mx-5 identite">
            <div className="d-flex this-text-profil">
              <div className="profil-img rounded-5 cursor-pointer">
                <Profile
                  imageUrl={currentUser.photoURL}
                  className="profil-img"
                />
              </div>
              <div className="text-profil text-center text-lg-start">
                <h5 className="fw-bold text-black">
                  {currentUser.displayName}
                </h5>
                <p className="text-sm ttext-[#145DA0] font-bold bg-gray-200 text-2xl rounded-full">
                  {currentUser.email}
                </p>
              </div>
            </div>
            <div className="btn-profil d-flex align-items-center Btn-Group">
              <input
                type="file"
                accept="image/*"
                className="d-none"
                id="profileImageInput"
                onChange={handleChangeProfileImage}
              />
              <label
                htmlFor="profileImageInput"
                className="btn bt btn-primary me-2 w-100 rounded-pill"
              >
                modifier le profil
              </label>
              <button
                type="button"
                className="btn bt2 btn-outline-primary rounded-5"
              >
                <CgMore className="fs-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="my-4 bg-light p-3 shadaw-sm rounded-4">
          <div className="Publications p-3">
            <ul className="d-flex justify-content-around align-items-center list-unstyled">
              <li>
                <button
                  className={`border-0 ${activeTab === 'images' ? 'act' : ''}`}
                  onClick={() => handleTabClick('images')}
                >
                  Posts
                </button>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default ProfilPage;
