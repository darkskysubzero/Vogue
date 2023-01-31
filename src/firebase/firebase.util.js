// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4s6VbrEFcdWBIG_9x143DfH9SDc8kgZ0",
    authDomain: "vogue-4eb6e.firebaseapp.com",
    projectId: "vogue-4eb6e",
    storageBucket: "vogue-4eb6e.appspot.com",
    messagingSenderId: "1020730558542",
    appId: "1:1020730558542:web:a24783b361fc485d75db1f",
    measurementId: "G-JBNKHP3Y0P"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
