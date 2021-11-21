import React from "react";
import TokenContext from "./TokenContext";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useState } from "react";
import FetchGraphQL from "../../FetchGraphQL";
import { Navigate } from "react-router";

const TokenState = (props) => {

    const [tokenValue, setTokenValue] = useState("")

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

    const signInAuth = (provider) => {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log(token)
                setTokenValue(token);
 
                localStorage.setItem("token", token);

                // The signed-in user info.
                const user = result.user;
                console.log(user)

                localStorage.setItem("user", user.displayName);
                if (user){
                    setTimeout(()=>{ alert("succesfully logged in");
                    window.location = '/gitdata'
                }, 0);
                    
                }else{
                    window.location="/"
                    
                }
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


    return (
        <TokenContext.Provider value={{ tokenValue, signInAuth }}>
            {props.children}
        </TokenContext.Provider>
    )
}

export default TokenState