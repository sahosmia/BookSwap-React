// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFrctRk5mJD7aGm2PuOxzlzT4mgf8tMi8",
  authDomain: "bookswap-362e7.firebaseapp.com",
  projectId: "bookswap-362e7",
  storageBucket: "bookswap-362e7.firebasestorage.app",
  messagingSenderId: "926942053479",
  appId: "1:926942053479:web:3c13e383d4cd7364acc0c2",
  measurementId: "G-03ZJ0FT261",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
