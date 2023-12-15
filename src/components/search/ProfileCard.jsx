import React, { useState, useEffect } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import { db } from '../../config/firebase-config.js';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

const ProfileCard = ({ userId, photoURL, displayName, email }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState([]);

  // Utilisez useEffect pour récupérer la liste des followers à chaque chargement du composant
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const userDocRef = doc(db, 'users', email);
        const userDocSnapshot = await getDocs(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          if (userData.followers) {
            setFollowers(userData.followers);
          }
        }
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };
   


    fetchFollowers();
  }, [email]);
  // console.log(email);
  console.log(followers);

  const handleFollowToggle = async (event) => {
  event.preventDefault();
  
  

   
    // Toggle isFollowing state
    setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    

    try {
      const userDocRef = doc(db, 'users', email);

      // Si l'utilisateur suit actuellement, retirez-le de la liste des followers
      if (isFollowing) {
        await updateDoc(userDocRef, {
          followers: followers.filter((follower) => follower !== email),
        });
      } else {
        // Sinon, ajoutez-le à la liste des followers
        await updateDoc(userDocRef, {
          followers: [...followers, email],
          
         
        });
      }
     
    } catch (error) {
      console.error('Error updating followers:', error);
    }
   
   
  };

  return (
    <div className="mb-3 col-md-6">
      <div className="card w-100  position-relative">
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
