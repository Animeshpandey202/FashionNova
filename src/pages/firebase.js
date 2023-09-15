// Import Firebase and specific services/modules you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBQffogcgefEGfLkaUfVNsqOzvHxMPuW10",
    authDomain: "fashionnova-7b212.firebaseapp.com",
    projectId: "fashionnova-7b212",
    storageBucket: "fashionnova-7b212.appspot.com",
    messagingSenderId: "781147388703",
    appId: "1:781147388703:web:aeb52e21674fa799afce2a",
    measurementId: "G-VGRLBV6KWY"
  };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export default db; // Export Firestore instance
