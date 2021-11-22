import React from "react";
import TokenContext from "./TokenContext";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useState } from "react";

const TokenState = (props) => {

    const [tokenValue, setTokenValue] = useState("")

    const firebaseConfig = {
        apiKey: "AIzaSyCoqHK57lKtGlYUn2pE_g7IboYSLgYD4L4",
        authDomain: "repo-improv-b8248.firebaseapp.com",
        projectId: "repo-improv-b8248",
        storageBucket: "repo-improv-b8248.appspot.com",
        messagingSenderId: "720467839619",
        appId: "1:720467839619:web:12081ce7be2b95a10629b6",
        measurementId: "G-GPWZMQQ6GT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

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

                if (user) {
                    window.location = '/home'
                } else {
                    window.location = "/";
                }
                // ...
            }).catch((error) => {
                window.location = "/";
            });
    }


    return (
        <TokenContext.Provider value={{ tokenValue, signInAuth }}>
            {props.children}
        </TokenContext.Provider>
    )
}

export default TokenState