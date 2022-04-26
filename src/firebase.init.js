// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfmaCtrTSpVFUtAcYNWHGwGdVMq_4SdnU",
  authDomain: "genius-car-with-db.firebaseapp.com",
  projectId: "genius-car-with-db",
  storageBucket: "genius-car-with-db.appspot.com",
  messagingSenderId: "92252020174",
  appId: "1:92252020174:web:f953b40f9e5b6bb121df9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
