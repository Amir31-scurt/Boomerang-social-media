import React, { useState, useEffect, useContext } from 'react';
import Profile from './Profile';
import { CgMore } from 'react-icons/cg';
import { PostImageProfile } from './PostImageProfile';
import '../../assets/css/Profile.css';
import { v4 as uuidv4 } from 'uuid';
import { db, storage } from '../../config/firebase-config.js';
import { AuthContext } from '../../contexte/authContext.js';
import { usePostActions } from '../ComposTimeLine/postActions/usePostActions';
import { FiCamera } from 'react-icons/fi';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
  doc,
  updateDoc,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore';
import ImageCropper from './ImageCropper.jsx';

function ProfilPage() {
  const { handleLikePost, DeletePost, handleEdit } = usePostActions();
  const { currentUser } = useContext(AuthContext);

  // Initialize state with null or undefined, or a loading image placeholder
  // Utilisation de useState pour gérer l'URL de l'image de profil
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [bannerImageUrl, setBannerImageUrl] = useState('');

  const [isCroppingProfile, setIsCroppingProfile] = useState(false);
  const [isCroppingBanner, setIsCroppingBanner] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  // ===============================================================================================
  useEffect(() => {
    const fetchProfileData = async () => {
      if (currentUser && currentUser.uid) {
        const usersDocRef = collection(db, 'users');
        const userQuery = query(
          usersDocRef,
          where('uid', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          // Since we're querying by UID, there should be only one document.
          const userData = querySnapshot.docs[0].data();
          setProfileImageUrl(userData.profilPic || '');
          setBannerImageUrl(userData.bannerPic || '');
          console.log(userData);
        } else {
          console.log('No user document found with the UID:', currentUser.uid);
          // Handle the case where no document is found. You may want to create one or alert the user.
        }
      }
    };

    if (currentUser) {
      fetchProfileData();
    }
  }, [currentUser]);

  // Utilisation de useState pour gérer l'onglet actif par défaut
  const [activeTab, setActiveTab] = useState('images');

  // Fonction pour gérer le changement de la photo de profil
  console.log(currentUser);
  const handleChangeProfileImage = async (event) => {
    const file = event.target.files[0];
    setIsCroppingProfile(true);
    if (file && currentUser) {
      const storageRef = ref(storage, `profileImages/${uuidv4()}-${file.name}`);
      try {
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);
        // Get the download URL
        const downloadURL = await getDownloadURL(storageRef);

        // Query Firestore to find the user's document based on uid
        const usersDocRef = collection(db, 'users');
        const userQuery = query(
          usersDocRef,
          where('uid', '==', currentUser.uid)
        );
        const querySnapshot = await getDocs(userQuery);
        console.log(userQuery);

        if (!querySnapshot.empty) {
          // Get the document reference from the first document in the snapshot
          const userDocRef = querySnapshot.docs[0].ref;
          console.log(userDocRef);
          // Update Firestore with the new URL
          await updateDoc(userDocRef, {
            profilPic: downloadURL, // Make sure this field name matches your Firestore field name
            photoURL: downloadURL, // And this one as well, if you have it
          });

          // Update local state and Auth profile
          setProfileImageUrl(downloadURL);
          if (currentUser && currentUser.updateProfile) {
            await currentUser.updateProfile({ photoURL: downloadURL });
            alert('Profile updated successfully');
          } else {
            alert('Error: currentUser is not available or invalid');
          }
        } else {
          console.error('No user document found for UID:', currentUser.uid);
          // Handle the case where the user document does not exist
        }
      } catch (error) {
        console.error('Error uploading image to Firebase Storage:', error);
        // Handle the error, perhaps by showing a message to the user
      }
    }
  };

  const handleCroppedImage = (croppedImage) => {
    // Logic to handle the cropped image
    // For example, upload it to Firebase and update the state
    // Then, reset the cropping state
    setIsCroppingProfile(false);
    setIsCroppingBanner(false);
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
                {isCroppingProfile && (
                  <ImageCropper
                    imageFile={selectedFile}
                    onCropped={handleCroppedImage}
                    aspectRatio={1} // For square cropping
                  />
                )}
                {/* {isCroppingBanner && (
                  <ImageCropper
                    imageFile={selectedFile}
                    onCropped={handleCroppedImage}
                    aspectRatio={16 / 9} // Example aspect ratio for banners
                  />
                )} */}
                <Profile imageUrl={currentUser.profilPic} className="" />
                <input
                  type="file"
                  accept="image/*"
                  className="d-none"
                  id="profileImageInput"
                  onChange={handleChangeProfileImage}
                />
                <label htmlFor="profileImageInput">
                  {/* <FiCamera className="camera-icon" /> */}
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
