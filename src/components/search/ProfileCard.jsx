import React, { useState, useEffect, useContext } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { AuthContext } from '../../contexte/authContext';
import {
  collection,
  getDocs,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../config/firebase-config';

const ProfileCard = ({ imageSrc }) => {
  const { user, currentUser } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, 'users');
        const usersSnapshot = await getDocs(usersCollection);
        const usersData = [];

        usersSnapshot.forEach((userDoc) => {
          const userData = userDoc.data();
          usersData.push(userData);
        });

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users from Firestore:', error);
      }
    };

    fetchUsers();
  }, []);

  const renderProfile = (userData) => {
    const { uid, displayName, email, isFollowing, photoURL } = userData;

    const updateFollowStatusInFirestore = async (newFollowStatus) => {
      try {
        const userDocRef = doc(db, 'users', uid);
        await setDoc(userDocRef, { isFollowing: newFollowStatus }, { merge: true });
      } catch (error) {
        console.error('Error updating follow status in Firestore:', error);
      }
    };

    const handleFollowToggle = async (event) => {
      event.preventDefault();
      const newFollowStatus = !isFollowing;
      // setUsers((prevIsFollowing) => !prevIsFollowing)

      // Update Firestore
      updateFollowStatusInFirestore(newFollowStatus);
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
                <img src={photoURL} alt="" className="image" />
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

  return (
    <div className="container flex-column d-flex">
    <div className="row">
      {users.map((userData) => renderProfile(userData))}
    </div>
    </div>
  );
};

export default ProfileCard;
