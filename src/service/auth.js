import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1Ybbqn2ZgdXsJcnSDKWer0Zx3-Qv0ROM",
    authDomain: "repo-improv.firebaseapp.com",
    projectId: "repo-improv",
    storageBucket: "repo-improv.appspot.com",
    messagingSenderId: "326241984035",
    appId: "1:326241984035:web:ade250b2bc59dc8763db96",
    measurementId: "G-B09R5NFKVV"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
const token = ""
const signInAuth = (provider) => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
         token = credential.accessToken;
            console.log(token)


            // The signed-in user info.
            const user = result.user;
            console.log(user)
            /* 
                localStorage.setItem("user" , user.displayName); */
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
}

export default signInAuth;