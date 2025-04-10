// firebase-config.js - Firebase Initialization

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA44KXzVWqkl6pAknsKN8ncHar0ks-gAeI",
  authDomain: "aloha-portal.firebaseapp.com",
  projectId: "aloha-portal",
  storageBucket: "aloha-portal.firebasestorage.app",
  messagingSenderId: "1047677448734",
  appId: "1:1047677448734:web:9ff45e89a16df21b0d340f",
  measurementId: "G-YQCNLJ5TB3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
