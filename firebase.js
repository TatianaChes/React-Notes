// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Ll0NMqALVHmbEGXCRhiIJK-cGivu1vU",
  authDomain: "react-notes-b6abf.firebaseapp.com",
  projectId: "react-notes-b6abf",
  storageBucket: "react-notes-b6abf.appspot.com",
  messagingSenderId: "435360286095",
  appId: "1:435360286095:web:3841201c454c08ae4677fa",
  measurementId: "G-X50RMDV37H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")