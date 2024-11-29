// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAiCgfQGYL7AKChstLYaIpI5rf6jtU_egk",
  authDomain: "coffeestore-8f086.firebaseapp.com",
  projectId: "coffeestore-8f086",
  storageBucket: "coffeestore-8f086.firebasestorage.app",
  messagingSenderId: "712560260146",
  appId: "1:712560260146:web:512ddb980e633f7cfcf82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);