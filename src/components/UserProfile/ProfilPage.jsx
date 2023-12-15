import React, { useState, useEffect } from 'react'
import { Banner } from './Banner'
import Profile from './Profile'
// import { CgMore } from 'react-icons/cg';
import { PostImageProfile } from './PostImageProfile';
import PostVideoProfile from './PostVideoProfile';
import PostImageVideo from './PostImageVideo';
import '../../assets/css/Profile.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../config/firebase-config.js';


function ProfilPage() {

  {/*// const [profileImageUrl, setProfileImageUrl] = useState(
  //   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
// );*/}

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
    <div className='ProfilPage mt-4'>
      <div className="container">
        <div className="rounded-4 page-profil">
          <div className="Profil-img p-3">
            <Banner />
          </div>
          <div className="bg-white d-flex justify-content-between pb-4 mx-5 identite">
            <div className="d-flex this-text-profil">
              <div className="profil-img rounded-5 cursor-pointer">
                <Profile imageUrl={profileImageUrl} className="profil-img" />
              </div>
              <div className="text-profil">
                <h5 className=" fw-bold text-black">Becky Lynch</h5>
                <p className="text-sm ttext-[#145DA0] font-bold bg-gray-200 text-2xl rounded-full">example@gmail.com</p>
              </div>
            </div>
            <div className=" me-5 btn-profil">
              <input type="file" accept="image/*" className="d-none" id="profileImageInput" onChange={handleChangeProfileImage} />
              <label htmlFor="profileImageInput" className="btn btn-primary btn-sm me-3 w-100 rounded-5">
                Changer le profil
              </label>
              {/* <button type="button" class="btn btn-primary btn-sm rounded-full w-50">
            <CgMore />
            </button> */}
            </div>
          </div>
        </div>

        <div className="my-4 shadaw-sm rounded-4">
          <div className="Publications p-3">
            <ul className="d-flex justify-content-around align-items-center list-unstyled">
              <li>
                <button className={`border-0 ${activeTab === 'images' ? 'act' : ''}`} onClick={() => handleTabClick('images')}>
                  Images
                </button>
              </li>
              
              <li>
                <button className={`rounded-5 border-0 ${activeTab === 'videos' ? 'act' : ''}`} onClick={() => handleTabClick('videos')}>
                  Videos
                </button>
              </li>
              <li>
                <button className={`rounded-5 border-0 ${activeTab === 'posts' ? 'act' : ''}`} onClick={() => handleTabClick('posts')}>
                  Posts
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            {activeTab === 'images' && <PostImageProfile />}
            {activeTab === 'videos' && <PostVideoProfile />}
            {activeTab === 'posts' && <PostImageVideo />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilPage
