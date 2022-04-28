// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlt_GgJj_uHuzEMVjXcXwbPg2RvAN9ec",
  authDomain: "skullcandy-94096.firebaseapp.com",
  projectId: "skullcandy-94096",
  storageBucket: "skullcandy-94096.appspot.com",
  messagingSenderId: "745724826577",
  appId: "1:745724826577:web:2308ae6eda45b4735606f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);