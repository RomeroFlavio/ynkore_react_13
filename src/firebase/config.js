// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPpD8BYK8_7IwOifVQm_U3e_pTHAm06qc",
  authDomain: "ecommerce-ynkore.firebaseapp.com",
  projectId: "ecommerce-ynkore",
  storageBucket: "ecommerce-ynkore.appspot.com",
  messagingSenderId: "493154098670",
  appId: "1:493154098670:web:ff36fb869bf5d1cadd82ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app
}