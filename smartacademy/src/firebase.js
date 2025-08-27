// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2kGvj3FEJotWnPZuG7HDvvUYvcVt-Z0g",
  authDomain: "smart-academy-760e4.firebaseapp.com",
  projectId: "smart-academy-760e4",
  storageBucket: "smart-academy-760e4.firebasestorage.app",
  messagingSenderId: "361654417255",
  appId: "1:361654417255:web:5aacb661bf1ca5c73021c2",
  measurementId: "G-12CFRR7YQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();