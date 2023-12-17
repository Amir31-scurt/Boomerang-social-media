
import React, { useState, useEffect, useContext } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config.js';
import { AuthContext } from '../../contexte/authContext.js';
import { Link } from 'react-router-dom';

const ProfileCard = ({ photoURL, displayName, email, userId, onProfileClick }) => {
  const { user, currentUser } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followClicked, setFollowClicked] = useState(false);

  
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
          {/* <img src={noire} alt="" className="image" /> */}

        </div>
        <div className="mx-4 mt-3 d-flex justify-content-between cardConte">
          <div className="d-flex">
            <div className="rounded searchRounded rounded-circle ms-2">
            <Link to={"/autre-profile"} >
          <img     src={photoURL}  alt="" className="img-fluid w-100" />
          </Link>
         
            </div>
            <div className="paraTest ms-3 text-start">
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
              {isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
