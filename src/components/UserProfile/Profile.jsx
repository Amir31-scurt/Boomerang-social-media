import React, { useRef, useState, useEffect, useContext } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { storage } from '../../config/firebase-config';
import { AuthContext } from '../../contexte/authContext';

function Profile({ imageUrl, onImageChange }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState(imageUrl); // Initialize with the passed imageUrl
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    // Set image from currentUser's photoURL
    if (currentUser && currentUser.photoURL) {
      setImage(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file && currentUser) {
      const storageRef = ref(
        storage,
        `profileImages/${currentUser.uid}-${file.name}`
      );
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        setImage(downloadURL);

        // Update the user's profile in Firebase Authentication
        await updateProfile(currentUser, { photoURL: downloadURL });
      } catch (error) {
        console.error('Error uploading image to Firebase Storage:', error);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div onClick={handleImageClick} className="this-profil">
        <img
          src={image || imageUrl}
          className="img-fluid image-display-before cursor-pointer rounded-full border-4 border border-light "
          alt="Profile"
        />
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
          className="img-fluid image-display-before cursor-pointer rounded-full border-4 border border-light "
        />
      </div>
    </div>
  );
}

export default Profile;
