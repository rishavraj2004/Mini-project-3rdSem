// Firebase CDN App + Firestore SDK (Browser Compatible)
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "XXXXXXXXXXXX.firebaseapp.com",
    projectId: "YOUR-NAME",
    storageBucket: "YOUR-NAME.firebasestorage.app",
    messagingSenderId: "438221738438",
    appId: "XXXXXXXXX",
    measurementId: "XXXXXXXXXXX"
};

// Initialize Firebase (Browser Version)
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
