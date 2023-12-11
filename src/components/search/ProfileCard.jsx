import React, { useState } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { db } from '../../config/firestore.js';





const ProfileCard = ({ imageSrc, name, email }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = async (event) => {
    event.preventDefault();
    // setIsFollowing((prevIsFollowing) => !prevIsFollowing);

    try {
      const profileRef = db.collection.get('profiles').then(email);
      await profileRef.update({ isFollowing: !isFollowing });
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    } catch (error) {
      console.error('Erreur lors de la mise à jour dans Firestore', error);
    }



  };

  return (
    <div className="mb-3 col-md-6">
      <div className="card w-100  position-relative">
        <div className="imageProfile">
          <img src={imageSrc} alt="" className="img-fluid w-100" />
        </div>
        <div className="mx-4 mt-3 d-flex justify-content-between cardConte">
          <div className="d-flex">
            <div className="rounded searchRounded rounded-circle ms-2">
              {/* Assuming noire is a static image, you can replace it with a dynamic prop */}
              <img src={noire} alt="" className="image" />
            </div>
            <div className="paraTest ms-3">
              <h6 className="fw-bold">{name}</h6>
              <p className="ml-1">{email}</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleFollowToggle}
              style={{
                background: isFollowing ? 'gray' : 'blue',
                color: isFollowing ? 'white' : 'white',
              }}
              className="w-20 btn btn-primary btn-sm rounded-5 mt-2 border:active-none"
              id="button"
            >
              {isFollowing ? 'Suivi(s)' : 'Suivre'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
