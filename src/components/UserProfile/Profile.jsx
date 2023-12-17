import React, { useRef, useState, useEffect } from 'react';
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { updateDoc, doc } from 'firebase/firestore';
import { storage, DB } from '../../config/firebase-config'; // Adjust the import path as needed

function Profile({ imageUrl }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState('');

  // useEffect(() => {
  //   // Récupérer l'URL de l'image depuis le stockage local lors du montage du composant
  //   const savedImage = localStorage.getItem('profileImage');
  //   if (savedImage) {
  //     setImage(savedImage);
  //   }
  // }, []);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a storage reference
      const fileRef = storageRef(storage, `/profileImages/${file.name}`);

      try {
        // Upload file to Firebase Storage
        await uploadBytes(fileRef, file);

        // Get download URL
        const downloadURL = await getDownloadURL(fileRef);

        // Update local state
        setImage(downloadURL);

        // Update Firestore user document
        const userDocRef = doc(DB, 'users' /* userID */); // Replace with actual user ID
        await updateDoc(userDocRef, { photoURL: downloadURL });

        // Optionally, save to local storage
        // localStorage.setItem('profileImage', downloadURL);
      } catch (error) {
        console.error('Error uploading image: ', error);
      }
    }
  };
  const imageSrc =
    image instanceof File ? URL.createObjectURL(image) : image || imageUrl;

  return (
    <div className="container mt-5">
      <div onClick={handleImageClick} className="this-profil">
        {image ? (
          <img
            src={imageSrc}
            alt=""
            className="image-display-after cursor-pointer  rounded-full border-4 border border-light "
          />
        ) : (
          <img
            src={imageUrl}
            className="img-fluid image-display-before cursor-pointer rounded-full border-4 border border-light "
            alt=""
          />
        )}
        <input
          type="file"
          ref={inputRef}
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

export default Profile;
