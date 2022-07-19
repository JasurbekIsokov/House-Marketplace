import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeWCcJpJy6Gd0nCx36RY5LpbYYCzvPGlM",
  authDomain: "house-marketplace-app-ji.firebaseapp.com",
  projectId: "house-marketplace-app-ji",
  storageBucket: "house-marketplace-app-ji.appspot.com",
  messagingSenderId: "232120746751",
  appId: "1:232120746751:web:ceea2963388467248c82ca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
