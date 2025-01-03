// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-kncbeuyvqH8e9BjQVYGf18YpefTgBfA",
  authDomain: "new-job-portal-af5d8.firebaseapp.com",
  projectId: "new-job-portal-af5d8",
  storageBucket: "new-job-portal-af5d8.firebasestorage.app",
  messagingSenderId: "924459135763",
  appId: "1:924459135763:web:522ae39ee26a68969c60e6",
  measurementId: "G-XYZMLX4GLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
