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
        where('following', 'array-contains', currentUser.uid)
      );
      const followingSnapshot = await getDocs(followingQuery);

      const followingList = followingSnapshot.docs.map((doc) => doc.data());
      setFollowing(followingList);
    };

    const fetchFollowers = async () => {
      // Reference the collection, not a single document
      const followersRef = collection(DB, 'users');
      const followersQuery = query(
        followersRef,
        where('followers', 'array-contains', currentUser.uid)
      );
      const followersSnapshot = await getDocs(followersQuery);

      const followersList = followersSnapshot.docs.map((doc) => doc.data());
      setFollowers(followersList);
    };

    // You need to pass userUid to these functions
    const userUid = currentUser.uid; // Replace this with the actual user UID
    fetchFollowers(userUid);
    fetchFollowing(userUid);
  }, []);

  return (
    <div className="FollowCard">
      <div class="card-body">
        <ul className="">
          <h4 className="text-start">Amis que j'ai suivie</h4>
          <hr />
          {following.map((followingList) => (
            <li key={followingList.uid}>{followingList.displayName}</li>
          ))}
        </ul>
        <ul>
          <h4 className="text-start">Amis</h4>
          <hr />
          {followers.map((user) => (
            <li key={user.uid}>{user.displayName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
