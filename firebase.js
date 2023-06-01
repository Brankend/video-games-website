// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDw44BcjziYakfhr_g-BAiG1V3KbZ6UNm8",
    authDomain: "game-store-651b4.firebaseapp.com",
    projectId: "game-store-651b4",
    storageBucket: "game-store-651b4.appspot.com",
    messagingSenderId: "285479626742",
    appId: "1:285479626742:web:cea87cf466b0fb51fac9d7",
    measurementId: "G-KQSK7GDMDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);