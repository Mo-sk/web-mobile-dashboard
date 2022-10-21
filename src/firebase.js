// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOlnbs0C0k8gtpJJU486s-fmVI4OACSUo",
  authDomain: "siyv-web-mobile.firebaseapp.com",
  projectId: "siyv-web-mobile",
  storageBucket: "siyv-web-mobile.appspot.com",
  messagingSenderId: "380516153574",
  appId: "1:380516153574:web:35546a84a0d1a477b9e327"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
