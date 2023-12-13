import { createContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore functions

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const signUp = async (email, password, prenom, nom, profilPic) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Add user information to Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        email: user.email,
        prenom: prenom,
        nom: nom,
        profilPic,
        displayName: prenom + ' ' + nom,
      });

      // Set the displayName
      await updateProfile(user, {
        displayName: prenom + ' ' + nom,
        photoURL: profilPic,
      });

      console.log(user);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
    });
    return unsubscribe;
  }, []);

  const currentUser = auth.currentUser;
  // Get the current user's profile information
  const getUserProfile = () => {
    if (currentUser !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = currentUser.displayName;
      const email = currentUser.email;
      const photoURL = currentUser.photoURL;
      const emailVerified = currentUser.emailVerified;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = currentUser.uid;

      console.log(displayName, email, photoURL, emailVerified, uid);
    }
  };

  // Call getUserProfile() whenever the page is reloaded or the user signs in
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, currentUser, signUp }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
