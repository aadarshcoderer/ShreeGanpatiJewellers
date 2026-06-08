/*
  firebase-config.js
  ---------------------------------
  This file connects Shree Ganpati Jewellers to your live Firebase backend.
*/

const firebaseConfig = {
  apiKey: "AIzaSyAWUCp89rCXDlNv9Oe5l_8a6r-O3arB82Y",
  authDomain: "shree-ganpati-jewellers.firebaseapp.com",
  projectId: "shree-ganpati-jewellers",
  storageBucket: "shree-ganpati-jewellers.firebasestorage.app",
  messagingSenderId: "355731473045",
  appId: "1:355731473045:web:d66c2baeae9b7f6b11519c",
  measurementId: "G-LC9SFZXPH6"
};

// Initialize Firebase (using the compat layer your AI built for your files)
if (!window.firebase || !firebase.initializeApp) {
  console.warn('Firebase SDK not found. Make sure you included firebase-app-compat.js first.');
} else {
  if (!firebase.apps?.length) {
    firebase.initializeApp(firebaseConfig);
    // Explicitly expose Firestore and Auth globally for your scripts to use
    window.db = firebase.firestore();
    window.auth = firebase.auth();
    window.storage = firebase.storage(); 
    console.log("Firebase connected successfully to shree-ganpati-jewellers!");
  }
}