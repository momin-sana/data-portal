// Import the functions you need from the SDKs you need
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import {
//     createUserWithEmailAndPassword,
// } from "firebase/auth";
// import{
//     collection, addDoc
// }from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// const registerWithEmailPass = async(name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         await addDoc(collection(db, "users"), {
//             uid: user.uid,
//             name,
//             authProvider: "local",
//             email,
//         });
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };

export { auth };
export default db;