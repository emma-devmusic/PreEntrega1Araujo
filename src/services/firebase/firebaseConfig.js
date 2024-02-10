import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmb5hPhJEt89esmsfjuDqNTv0bBGjallk",
  authDomain: "app-stock-c10d8.firebaseapp.com",
  projectId: "app-stock-c10d8",
  storageBucket: "app-stock-c10d8.appspot.com",
  messagingSenderId: "46965326003",
  appId: "1:46965326003:web:434676982d6b63d7ea30c6",
  measurementId: "G-SS0DFKEM7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)