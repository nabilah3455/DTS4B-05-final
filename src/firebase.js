// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEx54T1DBOX1lGidJAJjdgfhJK9dAmgWI",
  authDomain: "react-authentication-ecb49.firebaseapp.com",
  projectId: "react-authentication-ecb49",
  storageBucket: "react-authentication-ecb49.appspot.com",
  messagingSenderId: "637661443331",
  appId: "1:637661443331:web:8a3531ca3eca4e5e4fa536",
  measurementId: "G-X0JESGXN1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;