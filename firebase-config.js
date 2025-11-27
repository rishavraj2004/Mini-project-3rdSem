// Firebase CDN App + Firestore SDK (Browser Compatible)
const firebaseConfig = {
    apiKey: "AIzaSyCUP1poCwCrCh7L0K75bSpNILUnIvLxmNQ",
    authDomain: "trust-note.firebaseapp.com",
    projectId: "trust-note",
    storageBucket: "trust-note.firebasestorage.app",
    messagingSenderId: "438221738438",
    appId: "1:438221738438:web:78845f57cc7ac9edc462c7",
    measurementId: "G-4B37J09FVW"
};

// Initialize Firebase (Browser Version)
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
