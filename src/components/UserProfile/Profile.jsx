import React, { useRef } from 'react';

function Profile({ imageUrl, onImageChange }) {
  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="container mt-5">
      <div onClick={handleImageClick} className="this-profil">
        <img
          src={imageUrl}
          alt="Profile"
          className="image-display-after cursor-pointer  rounded-full border-4 border border-light "
        />
        <input
          type="file"
          ref={inputRef}
          onChange={onImageChange}
          style={{ display: 'none' }}
          accept="image/*"
        />
      </div>
    </div>
  );
}

export default Profile;
