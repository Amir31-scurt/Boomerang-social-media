import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexte/authContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase-config";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        const data = doc.data();
        if (data) {
          setChats(data);
        } else {
          setChats([]);
        }
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(chats);
  return (
    <div className="chats">
      {chats &&
        Object.entries(chats)?.map((chat) => (
          <div className="userChat" key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt="photoURL" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p>text</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Chats;
