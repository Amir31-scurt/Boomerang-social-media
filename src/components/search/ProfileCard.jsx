import React, { useState, useEffect } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { db } from '../../config/firestore.js' ;

const ProfileCard = ({ imageSrc, name, email }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  // const handleFollowToggle = (event) => {
  //   event.preventDefault();
  //   setIsFollowing((prevIsFollowing) => !prevIsFollowing);
  // };

   // Use useEffect to fetch the initial follow state from Firestore when the component mounts
   useEffect(() => {
    const fetchFollowState = async () => {
      try {
        const profileRef = db.collection('profiles').doc(email);
        const doc = await profileRef.get();

        if (doc.exists) {
          const data = doc.data();
          setIsFollowing(data.isFollowing || false);
        }
      } catch (error) {
        console.error('Error fetching data from Firestore', error);
      }
    };

    fetchFollowState();
  }, [email]);

  const handleFollowToggle = async (event) => {
    event.preventDefault();

    try {
      const profileRef = db.collection('profiles').doc(email);

      // If the document does not exist, create it with an initial isFollowing value
      if (!(await profileRef.get()).exists) {
        await profileRef.set({ isFollowing: false });
      }

      // Update the isFollowing field based on the current state
      await profileRef.update({ isFollowing: !isFollowing });

      // Update the local state based on the new value in Firestore
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    } catch (error) {
      console.error('Error updating data in Firestore', error);
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
