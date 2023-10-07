// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAE0_gGpGtDR1y_XlyQj-Of4A8c65qaKkc",
    authDomain: "educational-events-cb705.firebaseapp.com",
    projectId: "educational-events-cb705",
    storageBucket: "educational-events-cb705.appspot.com",
    messagingSenderId: "338982119126",
    appId: "1:338982119126:web:9e52054713534ee56a8b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)