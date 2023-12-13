import React, { useState, useEffect, useContext } from 'react';
import './search.css';
import noire from '../../assets/images/noire.png';
import{ db} from "../../config/firebase-config";
import { AuthContext } from '../../contexte/authContext';
// import { updateDoc, doc } from 'firebase/firestore';
import { collection,doc, updateDoc, addDoc} from 'firebase/firestore';

const ProfileCard = ({ imageSrc, name, email, userId }) => {
  const { user, currentUser } = useContext(AuthContext);
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowToggle = async (event) => {
    event.preventDefault();
    // setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    try {
      // Mettez à jour l'état local immédiatement pour une réactivité rapide.
      setIsFollowing((prevIsFollowing) => !prevIsFollowing);

      // Mettez à jour le suivi dans Firestore.
      const userDocRef = doc(db, 'users', userId);
      await updateDoc(userDocRef, { isFollowing: !isFollowing });
      
    } catch (error) {
      console.error('Error updating follow status:', error.indexOf);
    }
  };

// Exemple de code lors de l'ajout d'un utilisateur à Firestore
  const addUserToFirestore = async (userData) => {
    try {
      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, { ...userData, isFollowing: false }); 
    } catch (error) {
      console.error('Error adding user to Firestore:', error.indexOf);
    }
    return addUserToFirestore();
  }

 

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
