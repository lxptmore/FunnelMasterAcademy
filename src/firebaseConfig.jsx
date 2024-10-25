// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object (replace with your own)
const firebaseConfig = {

    apiKey: "AIzaSyBOzPJCTYpQ2xI6aq7AbInRijpSO2uTItY",
  
    authDomain: "digitallydarla-3cbe7.firebaseapp.com",
  
    projectId: "digitallydarla-3cbe7",
  
    storageBucket: "digitallydarla-3cbe7.appspot.com",
  
    messagingSenderId: "112811397197",
  
    appId: "1:112811397197:web:025b8b187a199a87f10c04"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
