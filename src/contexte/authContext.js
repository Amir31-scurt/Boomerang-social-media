import { createContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
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
        prenom,
        nom,
        profilPic,
      });
      user.displayName = prenom + ' ' + nom;
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
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, signUp }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
