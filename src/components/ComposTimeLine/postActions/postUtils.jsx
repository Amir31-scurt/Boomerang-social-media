// postUtils.js
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { DB } from '../../../config/firebase-config'; // Ensure this path is correct

export const deletePost = async (postId) => {
  if (postId) {
    await deleteDoc(doc(DB, 'posts', postId));
  }
};

export const editPostDescription = async (postId, newDescription) => {
  if (postId && newDescription) {
    const postRef = doc(DB, 'posts', postId);
    await updateDoc(postRef, {
      description: newDescription,
    });
  }
};
