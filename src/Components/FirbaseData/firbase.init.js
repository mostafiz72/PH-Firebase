// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBngiZ2enD2o4Mv6PefWaK2t08_4L2Y-6w",
  authDomain: "email-pass-auth-21aec.firebaseapp.com",
  projectId: "email-pass-auth-21aec",
  storageBucket: "email-pass-auth-21aec.firebasestorage.app",
  messagingSenderId: "114694565486",
  appId: "1:114694565486:web:34d00edf26c4718456007f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);