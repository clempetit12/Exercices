// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdfWZFkC10zx23HEyf_rLfXLc94-b7xa4",
  authDomain: "cda-m2i--cp.firebaseapp.com",
  databaseURL: "https://cda-m2i--cp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cda-m2i--cp",
  storageBucket: "cda-m2i--cp.appspot.com",
  messagingSenderId: "943557197045",
  appId: "1:943557197045:web:357e2d464917477a0599bc",
  measurementId: "G-JZQ5Z0TJLV"
};

export const BASE_DB_URL = firebaseConfig.databaseURL
export const SIGN_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`
export const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);