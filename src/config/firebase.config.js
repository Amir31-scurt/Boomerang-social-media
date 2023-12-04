import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
  apiKey: 'AIzaSyBi0qDyzwSoXdaquKBiBKsaqon2Wffg9u0',
  authDomain: 'social-media-app-auth-6278f.firebaseapp.com',
  projectId: 'social-media-app-auth-6278f',
  storageBucket: 'social-media-app-auth-6278f.appspot.com',
  messagingSenderId: '1020806333889',
  appId: '1:1020806333889:web:1ad0c9cc5c9c0cfd525b40',
  measurementId: 'G-CZXFN0Z3SB',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
