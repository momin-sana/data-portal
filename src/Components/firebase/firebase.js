// Import the functions you need from the SDKs you need
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDE5X9rBeh0j6PwLGA8kZVMnoKctTARkdg",
    authDomain: "data-portal-14149.firebaseapp.com",
    projectId: "data-portal-14149",
    storageBucket: "data-portal-14149.appspot.com",
    messagingSenderId: "849161665055",
    appId: "1:849161665055:web:42c5cdf827ca04b523332a",
    measurementId: "G-FQJ6GTNE44",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const analytics = getAnalytics(app);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;