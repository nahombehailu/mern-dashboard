// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mot-intranet.firebaseapp.com",
  projectId: "mot-intranet",
  storageBucket: "mot-intranet.appspot.com",
  messagingSenderId: "27011838331",
  appId: "1:27011838331:web:620495324ec27881350dde"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);