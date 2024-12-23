// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4yA-_jM2kqYFL8RSWVlY3g0WFShrz_5A",
  authDomain: "metalogic-5f2a3.firebaseapp.com",
  projectId: "metalogic-5f2a3",
  storageBucket: "metalogic-5f2a3.appspot.com",
  messagingSenderId: "703018356240",
  appId: "1:703018356240:web:ecc4f4db5a7ee4da1d8495",
  measurementId: "G-F7T1K8MB79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getStorage(app);
