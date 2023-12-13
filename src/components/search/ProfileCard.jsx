import React, { useState, useEffect, useContext } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { AuthContext } from '../../contexte/authContext';
import {
  addDoc,
  collection,
  setDoc,
  getDoc,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '../../config/firebase-config';



const ProfileCard = ({ imageSrc, name, email}) => {
  const { user, currentUser } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(false);

  // const handleFollowToggle = async (event) => {
  //   event.preventDefault();
  //   setIsFollowing((prevIsFollowing) => !prevIsFollowing)
  // }




  useEffect(() => {
    const fetchFollowStatus = async () => {
      try {
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        console.log(userDocRef);

        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setIsFollowing(userData.isFollowing || true);
        } else {
          setIsFollowing(true);
        }
      } catch (error) {
        console.error('Error getting follow status from Firestore:', error);
      }
    };

    fetchFollowStatus();
  }, [user.uid]); // Include user.uid in the dependency array to re-fetch when the user changes

  const handleFollowToggle = async (event) => {
    event.preventDefault();
    const newFollowStatus = !isFollowing;

    // Update the state immediately
    setIsFollowing(newFollowStatus);

    // Update Firestore
    try {
      const userDocRef = doc(db, 'users', user.uid);
      await setDoc(userDocRef, { isFollowing: newFollowStatus }, { merge: true });
    } catch (error) {
      console.error('Error updating follow status in Firestore:', error);
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
              <h6 className="fw-bold">{user.uid}</h6>
              <p className="ml-1">{email}</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleFollowToggle}
              style={{
                background: isFollowing ? 'blue' : 'gray',
                color: isFollowing ? 'white' : 'white',
              }}
              className="w-20 btn btn-primary btn-sm rounded-5 mt-2 border:active-none"
              id="button"
            >
              {isFollowing ? 'Suivre' : 'Suivi(s)'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
