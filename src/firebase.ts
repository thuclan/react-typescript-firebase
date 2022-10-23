// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuUyyNPdBJcONqMUo6EuysDroOS8UY-es",
  authDomain: "fir-dummy-data.firebaseapp.com",
  projectId: "fir-dummy-data",
  storageBucket: "fir-dummy-data.appspot.com",
  messagingSenderId: "70511416275",
  appId: "1:70511416275:web:de77f536bb70319bf65526",
  measurementId: "G-C5VW1HSYCV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
