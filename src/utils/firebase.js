// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPfhbDT2LztC9qxSRnNsU7-asKfObTII4",
  authDomain: "ecommerce-c1e31.firebaseapp.com",
  projectId: "ecommerce-c1e31",
  storageBucket: "ecommerce-c1e31.appspot.com",
  messagingSenderId: "117382734191",
  appId: "1:117382734191:web:e926763c50a3ce6e9b089a",
  measurementId: "G-BRN1BR1B6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
