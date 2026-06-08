/*
  firebase-config.example.js
  ---------------------------------
  Copy this file to `firebase-config.js` and fill in your project's credentials.
  IMPORTANT: Do NOT commit `firebase-config.js` to source control. Add it to .gitignore.

  Example usage: include the script in your HTML _before_ your app scripts:

  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-auth-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore-compat.js"></script>
  <script src="firebase-config.js"></script>
  <script src="script.js" defer></script>

*/

// Replace the values below with your Firebase project config and save as firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase (compat)
if (!window.firebase || !firebase.initializeApp) {
  console.warn('Firebase SDK not found. Make sure you included firebase-app-compat.js first.');
} else {
  if (!firebase.apps?.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
