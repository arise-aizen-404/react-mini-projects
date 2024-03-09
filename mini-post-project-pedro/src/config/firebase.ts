// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYd2j3veE3YL6Lz7sNFGx-GqLfIoeBZ5o",
  authDomain: "react-auth-pedro.firebaseapp.com",
  projectId: "react-auth-pedro",
  storageBucket: "react-auth-pedro.appspot.com",
  messagingSenderId: "508897050",
  appId: "1:508897050:web:dfafcf7a2db61282786ea3",
  measurementId: "G-63JZZEJ03L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();