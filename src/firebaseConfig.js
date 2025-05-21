// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCO_5VFCW7LWtsY6xibYpfVdgvX2l_LR6Y",
    authDomain: "it-s-inspected.firebaseapp.com",
    projectId: "it-s-inspected",
    storageBucket: "it-s-inspected.firebasestorage.app",
    messagingSenderId: "716647522990",
    appId: "1:716647522990:web:57467117f605f7d61c433f",
    measurementId: "G-36N3YFESHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app); // Initialize Firestore

export { storage, db };