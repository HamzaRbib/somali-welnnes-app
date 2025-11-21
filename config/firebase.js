// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add your own Firebase configuration here
const firebaseConfig = {
  apiKey: "AIzaSyBQPOWJThYEj81-CbQMvDmsckSvnPaR9ls",
  authDomain: "somali-welnnes-app.firebaseapp.com",
  projectId: "somali-welnnes-app",
  storageBucket: "somali-welnnes-app.firebasestorage.app",
  messagingSenderId: "216305246400",
  appId: "1:216305246400:web:aca4537e33a15fe7080d25",
  measurementId: "G-7SHCBWZHRN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
auth.settings.recaptchaV3Provider = "https://www.google.com/recaptcha/api.js?render=explicit";
