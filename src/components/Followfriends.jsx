import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { DB } from '../config/firebase-config';
import { collection, where,query, getDoc, getDocs,doc } from 'firebase/firestore';
import { useState,useEffect } from 'react';


export default function Followfriends() {
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const fetchFollowing = async (userUid) => {
      const followingRef = doc(DB,'users',userUid);
      const followingQuery = query(
        followingRef,userUid &&
        where('following', 'array-contains', userUid)
      );
      const followingSnapshot = await getDoc(followingQuery);

      const followingList = followingSnapshot.docs.map((doc) => doc.data());
      setFollowing(followingList);
    };
    const fetchFollowers = async (userUid) => {
      const followersRef = doc(DB, 'users',userUid);
       const followersQuery = query(
         followersRef,userUid &&
        where('followers', 'array-contains', userUid)
       );
      const followersSnapshot = await getDoc(followersQuery);

      const followersList = followersSnapshot.docs.map((doc) => doc.data());
      setFollowers(followersList);
    };

    fetchFollowers();
    fetchFollowing();
  }, []);
  return (
    <div className="FollowCard mt-5">
      <div class="card-body">
        <ul className=''>
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
