import { createContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from '../config/firebase-config';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
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

;
// const Email = "utilisateur@example.com";
//  await.
//     .then(() => {
     
//       // Password reset email sent!
//       console.log("E-mail de réinitialisation envoyé avec succès");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });

  

  return (
    <AuthContext.Provider value={{ signIn, user, signUp }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}
