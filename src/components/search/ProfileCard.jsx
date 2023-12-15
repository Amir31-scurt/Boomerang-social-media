import React, { useState, useEffect, useContext } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase-config.js';
import { AuthContext } from '../../contexte/authContext.js';

const ProfileCard = ({ photoURL, displayName, email, userId }) => {
  const { user, currentUser } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followClicked, setFollowClicked] = useState(false);

  const handleFollowUser = async (userIdToFollow) => {
    try {
      const userDocRef = doc(db, 'users', currentUser.uid);
      const userToFollowDocRef = doc(db, 'users', userIdToFollow);
      console.log(userToFollowDocRef);

      const userDocSnapshot = await getDoc(userDocRef);
      const userToFollowDocSnapshot = await getDoc(userToFollowDocRef);

      if (userDocSnapshot.exists() && userToFollowDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const userToFollowData = userToFollowDocSnapshot.data();

        let updatedUserFollowing = userData.following || [];
        let updatedUserToFollowFollowers = userToFollowData.followers || [];

        let updatedFollowingCount = userData.followingCount || 0;
        let updatedNumberfollowers = userToFollowData.Numberfollowers || 0;

        const currentUserFollowing =
          userData.following && userData.following.includes(userIdToFollow);

        if (currentUserFollowing) {
          // If the user is already following, consider it as an unfollow
          updatedUserFollowing = updatedUserFollowing.filter(
            (userId) => userId !== userIdToFollow
          );
          updatedUserToFollowFollowers = updatedUserToFollowFollowers.filter(
            (userId) => userId !== currentUser.uid
          );
          updatedFollowingCount -= 1;
          updatedNumberfollowers -= 1;
        } else {
          // If the user is not following, consider it as a follow
          updatedUserFollowing.push(userIdToFollow);
          updatedUserToFollowFollowers.push(currentUser.uid);
          updatedFollowingCount += 1;
          updatedNumberfollowers += 1;
        }

        // Update Firestore with new following and followers lists, and the new following count
        await updateDoc(userDocRef, {
          following: updatedUserFollowing,
          followingCount: updatedFollowingCount,
        });
        await updateDoc(userToFollowDocRef, {
          followers: updatedUserToFollowFollowers,
          Numberfollowers: updatedNumberfollowers,
        });

        // Update local state to reflect the new following list
        setIsFollowing(!currentUserFollowing);
      }
    } catch (error) {
      console.error('Error toggling follow/unfollow: ', error);
    }
  };

  // const handleFollowToggle = () => {
  //   setFollowClicked((prevFollowClicked) => !prevFollowClicked);
  // };

  useEffect(() => {
    // Fetch new data here
  }, [isFollowing]);
  return (
    <div className="mb-3 col-12">
      <div className="card w-100  position-relative">
        <div className="mx-4 my-3 d-flex justify-content-between align-items-center cardConte">
          <div className="d-flex align-items-center">
            <div className="rounded rounded-circle ms-2">
              <input
                type="image"
                alt=""
                className="icone-carte me-3 image rounded rounded-circle ms-2"
                src={photoURL}
              />
            </div>
            <div className="paraTest ms-3 text-start">
              <h6 className="fw-bold">{displayName}</h6>
              <p className="ml-1">{email}</p>
            </div>
          </div>
          <div className="">
            <button
              onClick={handleFollowUser}
              className={`btn btn-md rounded-5 mt-2 border:active-none ${
                isFollowing ? 'btn-secondary' : 'btn-primary'
              }`}
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
