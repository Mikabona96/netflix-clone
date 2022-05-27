// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTMIpSnA6c5BW0akOpbzVkQAY-xEzXBRY",
  authDomain: "netflix-clone-d34ae.firebaseapp.com",
  projectId: "netflix-clone-d34ae",
  storageBucket: "netflix-clone-d34ae.appspot.com",
  messagingSenderId: "946580794870",
  appId: "1:946580794870:web:b7cc90b758fd5d3a8d2bd7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}