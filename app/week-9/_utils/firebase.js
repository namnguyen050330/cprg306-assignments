// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-s-1vZYUkSUh20f191PJIHNHSMfVtDa8",
  authDomain: "cprg306-assignments-75932.firebaseapp.com",
  projectId: "cprg306-assignments-75932",
  storageBucket: "cprg306-assignments-75932.appspot.com",
  messagingSenderId: "181504331496",
  appId: "1:181504331496:web:a33af8c56863e6d185035d"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);