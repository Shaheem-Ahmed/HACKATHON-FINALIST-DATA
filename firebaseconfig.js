// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOiVCwLZHk6YlNMV6gMkaGpt1RGld3TZc",
  authDomain: "jawantechpk-d0e34.firebaseapp.com",
  projectId: "jawantechpk-d0e34",
  storageBucket: "jawantechpk-d0e34.appspot.com",
  messagingSenderId: "180227221188",
  appId: "1:180227221188:web:e63c155eaabbc8489c4b91",
  measurementId: "G-319TM34C3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;