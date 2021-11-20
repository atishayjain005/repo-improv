// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxID5TcLdCIq6Y9jjaY1hAwXeoenKGxrw",
  authDomain: "repo-editer.firebaseapp.com",
  projectId: "repo-editer",
  storageBucket: "repo-editer.appspot.com",
  messagingSenderId: "557527830495",
  appId: "1:557527830495:web:5e4fce0778f6f1dd55fe6a",
  measurementId: "G-TZH0W4V2FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);