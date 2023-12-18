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
import { FiCamera } from 'react-icons/fi';

function ProfilPage() {
  const { handleLikePost, DeletePost, handleEdit } = usePostActions();
  const { currentUser } = useContext(AuthContext);

  // Utilisation de useState pour gérer l'URL de l'image de profil
  const [profileImageUrl, setProfileImageUrl] = useState(() => {
    // Récupérer l'URL de l'image depuis le localStorage lors du montage du composant
    const storedImageUrl = localStorage.getItem('profileImageUrl');
    return storedImageUrl || 'https://your-default-image-url.jpg';
  });

  const [bannerImageUrl, setBannerImageUrl] = useState(() => {
    const storedImageUrl = localStorage.getItem('bannerImageUrl');
    return storedImageUrl || 'https://your-default-banner-image-url.jpg';
  });

  // Utilisation de useState pour gérer l'onglet actif par défaut
  const [activeTab, setActiveTab] = useState('images');

  // Utilisation de useEffect pour sauvegarder l'URL de l'image dans le localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('profileImageUrl', profileImageUrl);
  }, [profileImageUrl]);

  useEffect(() => {
    localStorage.setItem('bannerImageUrl', bannerImageUrl);
  }, [bannerImageUrl]);

  // Fonction pour gérer le changement de la photo de profil
  const handleChangeProfileImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const storageRef = ref(storage, `profileImages/${uuidv4()}-${file.name}`);
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setProfileImageUrl(downloadURL);
        currentUser.photoURL = downloadURL;
        // Here, you should also update the user's profile URL in your database or context
      } catch (error) {
        console.error('Error uploading image to Firebase Storage:', error);
      }
    }
  };

  const handleChangeBannerImage = async (event) => {
    const file = event.target.files[0];

    console.log('handleChangeBannerImage called');

    if (file) {
      const storageRef = ref(storage, `bannerImages/${uuidv4()}-${file.name}`);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setBannerImageUrl(downloadURL);
      } catch (error) {
        console.error(
          'Error uploading banner image to Firebase Storage:',
          error
        );
      }
    }
  };

  // Fonction pour gérer les clic des buttons images, videos et posts
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // ======================================================= Delete and Modify Posts =================================================

  return (
    <div className="ProfilPage mt-4">
      <div className="container">
        <div className="bg-white shadow-sm rounded-4 page-profil">
          <div className="Profil-img p-3">
            <div className="container my-3">
              <div className="rounded-5 bg-white">
                <input
                  src={bannerImageUrl}
                  type="file"
                  alt=""
                  // type="image"
                  className="img-fluid rounded-5 w-100 banner d-none"
                  onChange={handleChangeBannerImage}
                />
                <img
                  src={bannerImageUrl}
                  alt=""
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
                <input
                  type="file"
                  accept="image/*"
                  className="d-none"
                  id="profileImageInput"
                  onChange={handleChangeProfileImage}
                />
                <label htmlFor="profileImageInput">
                  <FiCamera className="camera-icon" />
                </label>
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
              {/* <input type="file" accept="image/*" className="d-none" id="profileImageInput" onChange={handleChangeProfileImage} />
              <label htmlFor="profileImageInput" className="btn btn-primary btn-sm me-2 w-100 rounded-5">
              
>>>>>>> origin/12_12_2023_Profil-Page
                modifier le profil
              </label> */}
              <button
                type="button"
                className="btn btn-primary btn-sm rounded-5 w-100"
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
                  Images
                </button>
              </li>

              <li>
                <button
                  className={`rounded-5 border-0 ${
                    activeTab === 'videos' ? 'act' : ''
                  }`}
                  onClick={() => handleTabClick('videos')}
                >
                  Videos
                </button>
              </li>
              <li>
                <button
                  className={`rounded-5 border-0 ${
                    activeTab === 'posts' ? 'act' : ''
                  }`}
                  onClick={() => handleTabClick('posts')}
                >
                  Posts
                </button>
              </li>
            </ul>
          </div>
          <div className="">
            {activeTab === 'images' && (
              <PostImageProfile
                userId={currentUser?.uid}
                currentUser={currentUser}
                handleLikePost={handleLikePost}
                DeletePost={DeletePost}
                handleEdit={handleEdit}
                // any other props that PostCard needs
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilPage;
