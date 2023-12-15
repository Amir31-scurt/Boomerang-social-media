import React, { useState, useContext, useEffect } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { db } from '../../config/firebase-config.js';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../contexte/authContext.js';

const ProfileCard = ({ photoURL, displayName, email }) => {
  const { user } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchFollowStatus = async () => {
      try {
        const followDocRef = doc(db, 'users', user.uid);
        const followDocSnapshot = await getDoc(followDocRef);

        if (followDocSnapshot.exists()) {
          const followData = followDocSnapshot.data();
          setIsFollowing(
            followData.usersFollowed && followData.usersFollowed.includes(user.uid)
          );
        }
      } catch (error) {
        console.error('Error fetching follow status:', error);
      }
    };

    fetchFollowStatus();
  }, [user.uid]);

  const handleFollowToggle = async () => {
    try {
      const followDocRef = doc(db, 'users', user.uid);
      const followDocSnapshot = await getDoc(followDocRef);

      if (followDocSnapshot.exists()) {
        const followData = followDocSnapshot.data();
        let updatedFollows = followData.follows || 0;
        let updatedUserFollowing = followData.usersFollowed || [];

        if (isFollowing) {
          updatedFollows -= 1;
          updatedUserFollowing = updatedUserFollowing.filter(
            (followedId) => followedId !== user.uid
          );
        } else {
          updatedFollows += 1;
          updatedUserFollowing.push(user.uid);
        }

        await updateDoc(followDocRef, {
          follows: updatedFollows,
          usersFollowed: updatedUserFollowing,
        });

        setIsFollowing(!isFollowing);
      }
    } catch (error) {
      console.error('Error toggling follow:', error);
    }
  };

  return (
    <div className="mb-3 col-md-6">
      <div className="card w-100 position-relative">
        <div className="imageProfile">
          <img src={photoURL} alt="" className="img-fluid w-100" />
        </div>
        <div className="mx-4 mt-3 d-flex justify-content-between cardConte">
          <div className="d-flex">
            <div className="rounded searchRounded rounded-circle ms-2">
              <img src={noire} alt="" className="image" />
            </div>
            <div className="paraTest ms-3">
              <h6 className="fw-bold">{displayName}</h6>
              <p className="ml-1">{email}</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleFollowToggle}
              style={{
                background: isFollowing ? 'gray' : 'blue',
                color: 'white',
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
