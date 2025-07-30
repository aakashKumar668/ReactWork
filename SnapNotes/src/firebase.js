// src/firebase.js
import { initializeApp } from "firebase/app";

import
    {
        getAuth,
        GoogleAuthProvider,
        RecaptchaVerifier,
        signInWithPhoneNumber
    } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAEXdcH2C_dF8aepEM2D4RoZOrN98i3C7o",
    authDomain: "mysnapnotes95.firebaseapp.com",
    projectId: "mysnapnotes95",
    storageBucket: "mysnapnotes95.firebasestorage.app",
    messagingSenderId: "275085265509",
    appId: "1:275085265509:web:b9200231f67f9b556c548c",
    measurementId: "G-CL3KWDJD2C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, RecaptchaVerifier, signInWithPhoneNumber };
