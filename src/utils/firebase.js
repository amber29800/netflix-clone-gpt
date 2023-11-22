// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMj1DUy64brRs_9IeNM9pWCytUF-EStac",
  authDomain: "netflixgpt-b88bd.firebaseapp.com",
  projectId: "netflixgpt-b88bd",
  storageBucket: "netflixgpt-b88bd.appspot.com",
  messagingSenderId: "48898964157",
  appId: "1:48898964157:web:2c5266d02a4a6222f915d4",
  measurementId: "G-ND9XF7V3P8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();