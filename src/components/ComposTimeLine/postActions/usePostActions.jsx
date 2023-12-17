// usePostActions.js
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../contexte/authContext';

export const usePostActions = () => {
  // Consts
  const { user } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);

  // Ouverture du Modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  //Fermeture du Modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setImageUrl('');
    setDescript('');
    setSelectedFile(null); // Réinitialiser la sélection de fichier
  };
  const [imageUrl, setImageUrl] = useState('');
  const [descript, setDescript] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  // L'etat de like a un poste
  const [postLikes, setPostLikes] = useState({});
  // l'etat du Bouton Post Text par defaut

  // l'etat du Tableau par defaut du Post Card
  const [postCard, setPostCard] = useState([]);

  // Poste Delete
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  // Functions ................................

  const handleLikePost = async (postId) => {
    try {
      const postDocRef = doc(DB, 'posts', postId);
      const postDocSnapshot = await getDoc(postDocRef);

      if (postDocSnapshot.exists()) {
        const postData = postDocSnapshot.data();
        const currentLikes = postData.likes || 0; // Get current likes count or default to 0
        const currentUserLiked =
          postData.usersLiked && postData.usersLiked.includes(user.uid);

        let updatedLikes = currentLikes;
        let updatedUsersLiked = postData.usersLiked || [];

        if (currentUserLiked) {
          // If the user has already liked the post, consider it as a dislike
          updatedLikes -= 1;
          updatedUsersLiked = updatedUsersLiked.filter(
            (userId) => userId !== user.uid
          );
        } else {
          // If the user hasn't liked the post, consider it as a like
          updatedLikes += 1;
          updatedUsersLiked.push(user.uid);
        }

        // Update Firestore with new likes count and users who liked the post
        await updateDoc(postDocRef, {
          likes: updatedLikes,
          usersLiked: updatedUsersLiked,
        });

        // Update local state to reflect the new likes count
        setPostLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: updatedLikes,
        }));
      }
    } catch (error) {
      console.error('Error toggling like/dislike: ', error);
    }
  };

  const DeletePost = (postId) => {
    setPostToDelete(postId);
    setConfirmModalOpen(true);
  };

  const handleEdit = (postId, newDescription) => {
    // Mettez à jour la description du post dans le tableau state
    setPostCard((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, description: newDescription } : post
      )
    );

    // Mettre à jour la description du post dans Firestore
    const postRef = doc(DB, 'posts', postId);
    updateDoc(postRef, {
      description: newDescription,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  return { handleLikePost, DeletePost, handleEdit };
};
