import React, { useState, useContext } from "react";
import userImg from "../../assets/images/User.png";
import { db } from "../../config/firebase-config";
import { AuthContext } from "../../contexte/authContext";
import { query, serverTimestamp } from "firebase/database";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

export default function Search() {
  const [userName, setUserName] = useState();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    // On définit la requette
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );
    try {
      // On récupére tous les documents correspondants à la requette
      const querySnapshot = await getDocs(q);
      await querySnapshot.forEach((doc) => {
        setUser(doc.data());
        // console.log(user);
      });
    } catch (error) {
      setError(true);
    }
  };

  const handleKeyDown = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    setUserName("");
    setUser(null);
  };
  return (
    <div className="search">
      <div className="searchForm">
        <input
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Find a user"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </div>
      {user && (
        <div className="userChat" onClick={handleSelect}>
          {typeof user.photoURL == "undefined" ? ( //Utilisateur n'a pas de pp ?
            <img src={userImg} alt="search" /> // On lui attribut une photo par défaut
          ) : (
            // Sinon
            <img src={user.photoURL} alt="search" /> // On lui attribut sa pp
          )}
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
      {error && <span>User not found</span>}
    </div>
  );
}
