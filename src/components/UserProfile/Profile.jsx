import React, { useRef, useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { storage } from '../../config/firebase-config.js';

function Profile({ imageUrl }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Récupération l’URL de l’image à partir du stockage
    const storedImageUrl = localStorage.getItem('profileImage');
    if (storedImageUrl) {
      setImage(storedImageUrl);
    }
  }, []);

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(file);

    if (file) {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const storageRef = ref(storage, `profileImages/${user.uid}-${file.name}`);

        try {
          await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(storageRef);
          
          // Update the image URL in your application
          setImage(downloadURL);

          // You can also store the image URL in local storage
          // localStorage.setItem('profileImage', downloadURL);

          localStorage.setItem('profileImage', downloadURL);
        } catch (error) {
          console.error('Error uploading image to Firebase Storage:', error);
        }
      }
    }
  }

  return (
    <div className="container mt-5">
      <div onClick={handleImageClick} className='this-profil' >
        {image ? (
          <img src={image instanceof File ? URL.createObjectURL(image) : image} alt="" className='image-display-after cursor-pointer  rounded-full border-4 border border-light ' />
        ) : (
          <img src={imageUrl} className='img-fluid image-display-before cursor-pointer rounded-full border-4 border border-light ' alt="" />
        )}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default Profile;
