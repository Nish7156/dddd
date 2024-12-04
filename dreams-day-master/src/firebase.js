// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg3XjXFDKZL8HXS9NGGE_oetDp_fhOzOA",
  authDomain: "dreamsday-15945.firebaseapp.com",
  projectId: "dreamsday-15945",
  storageBucket: "dreamsday-15945.firebasestorage.app",
  messagingSenderId: "269155103883",
  appId: "1:269155103883:web:873d0913b2a1201ec3d08e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
