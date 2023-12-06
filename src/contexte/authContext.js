import { createContext, useState, useEffect, useContext } from 'react';
import {
  signInwithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../config/firebase-config';

export const AuthContext = createContext();

export function AuthContextProvider(props) {
  const signUp = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

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
    <AuthContext.Provider value={{ signUp }}>
      {props.children}
    </AuthContext.Provider>
  );
}
