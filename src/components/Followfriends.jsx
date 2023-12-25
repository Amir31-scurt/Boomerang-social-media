import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { DB } from '../config/firebase-config';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { AuthContext } from '../contexte/authContext';

export default function Followfriends() {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchFollowing = async () => {
      // Reference the collection, not a single document
      const followingRef = collection(DB, 'users');
      const followingQuery = query(
        followingRef,
        where('followers', 'array-contains', currentUser.uid)
      );
      const followingSnapshot = await getDocs(followingQuery);

      const followingList = followingSnapshot.docs.map((doc) => doc.data());
      setFollowing(followingList);
    };

    const fetchFollowers = async (userUid) => {
      try {
        // Reference the 'users' collection
        const usersRef = collection(DB, 'users');

        // Create a query to find the user document where 'uid' field matches currentUser.uid
        const userQuery = query(usersRef, where('uid', '==', userUid));

        // Execute the query
        const querySnapshot = await getDocs(userQuery);

        // Check if we found the user document
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0].data();
          // Access the followers array
          const followersUids = userDoc.followers || [];

          // Fetch the displayName for each follower UID
          const followersData = await Promise.all(
            followersUids.map(async (followerUid) => {
              // Query based on a UID field inside the document
              const followerQuery = query(
                collection(DB, 'users'),
                where('uid', '==', followerUid)
              );
              const followerQuerySnapshot = await getDocs(followerQuery);

              if (!followerQuerySnapshot.empty) {
                const followerDoc = followerQuerySnapshot.docs[0].data();
                return {
                  uid: followerUid,
                  displayName: followerDoc.displayName,
                };
              } else {
                console.log(`No document found for UID: ${followerUid}`);
              }
              return null;
            })
          );

          // Filter out any null entries (in case some user data couldn't be fetched)
          const validFollowersData = followersData.filter(
            (follower) => follower != null
          );

          // Set the followers data
          setFollowers(validFollowersData);
        } else {
          console.log('User document not found');
        }
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    // You need to pass userUid to these functions
    const userUid = currentUser.uid; // Replace this with the actual user UID
    fetchFollowers(userUid);
    fetchFollowing(userUid);
  }, []);

  return (
    <div className="FollowCard vh-100 mt-5">
      <div class="card-body">
        <ul className="list-unstyled">
          <h4 className="text-start">Amis que j'ai suivie</h4>
          <hr />
          {following.map((followingList) => (
            <li
              key={followingList.uid}
              className="my-3 d-flex align-items-center gap-3"
            >
              <input
                type="image"
                src={followingList.profilPic}
                className="friendsPicture"
                alt="profile picture"
              />
              <h6>{followingList.displayName}</h6>
            </li>
          ))}
        </ul>
        <ul className="list-unstyled">
          <h4 className="text-start">Amis</h4>
          <hr />
          {followers.map((user) => (
            <li key={user.uid} className="my-3">
              <li
                key={user.uid}
                className="my-1 d-flex align-items-center gap-3"
              >
                {/* <input
                  type="image"
                  src={user.photoURL}
                  className="friendsPicture"
                  alt="Profile picture"
                /> */}
                <h6>{user.displayName}</h6>
              </li>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
