import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { DB } from '../../config/firebase-config';
import { PostCard } from '../ComposTimeLine/PostCard';

export function PostImageProfile({
  userId,
  currentUser,
  handleLikePost,
  DeletePost,
  handleEdit,
}) {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const postsRef = collection(DB, 'posts');
      const q = query(postsRef, where('userID', '==', userId));

      try {
        const querySnapshot = await getDocs(q);
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserPosts(posts);
      } catch (error) {
        console.error('Error fetching user posts: ', error);
      }
    };

    if (userId) {
      fetchUserPosts();
    }
  }, [userId]);

  return (
    <div className="milieu">
      {userPosts.map((card) => (
        <PostCard
          key={card.id}
          id={card.userID}
          likes={card.likes}
          addLikes={() => handleLikePost(card.userID)}
          profile={card.profile}
          nom={card.nom}
          date={card.date}
          suppression={card.suppression}
          publication={card.publication}
          description={card.description}
          handleDelete={(id) => DeletePost(card.userID)}
          currentUser={currentUser}
          handleEdit={(newDescription) =>
            handleEdit(card.userID, newDescription)
          }
        />
      ))}
    </div>
  );
}
