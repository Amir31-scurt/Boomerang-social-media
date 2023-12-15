import React, { useRef, useState, useEffect } from 'react';

function Profile({ imageUrl }) {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  // useEffect(() => {
  //   // Récupérer l'URL de l'image depuis le stockage local lors du montage du composant
  //   const savedImage = localStorage.getItem('profileImage');
  //   if (savedImage) {
  //     setImage(savedImage);
  //   }
  // }, []);

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImage(event.target.files[0]);

    // // Enregistrer l'URL de l'image dans le stockage local
    // localStorage.setItem('profileImage', image);

    // setImage(image);

  }

  return (
    <div className="container mt-5">
      <div onClick={handleImageClick} className='this-profil' >
        {image ? (
          <img src={URL.createObjectURL(image)} alt="" className='image-display-after cursor-pointer  rounded-full border-4 border border-light ' />
        ) : (
          <img src={imageUrl} className='img-fluid image-display-before cursor-pointer rounded-full border-4 border border-light ' alt="" />
        )}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: "none" }} />
      </div>
    </div>
  );
}

export default Profile;
