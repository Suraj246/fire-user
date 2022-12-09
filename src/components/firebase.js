// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyD0SeGmLW_UD5hiwtx-Vpv4ZE3f4_e_V8o",
    authDomain: "firelogin-c69ce.firebaseapp.com",
    projectId: "firelogin-c69ce",
    storageBucket: "firelogin-c69ce.appspot.com",
    messagingSenderId: "483895235242",
    appId: "1:483895235242:web:0d75637999bb66b98df6d3",
    measurementId: "G-5WR7JVY1HS"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);