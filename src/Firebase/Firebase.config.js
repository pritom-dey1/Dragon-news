// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjZW16wO__5zfzDN97NwtpnMsuyPIT3K0",
  authDomain: "dragon-news-bb334.firebaseapp.com",
  projectId: "dragon-news-bb334",
  storageBucket: "dragon-news-bb334.firebasestorage.app",
  messagingSenderId: "458662435095",
  appId: "1:458662435095:web:44f297746472eb7c21bf52",
  measurementId: "G-TSL01RWQHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
