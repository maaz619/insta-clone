import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7aTog9f_HPOCpRwq9R0ThZFO6hrLD-tk",
  authDomain: "instagram-clone-5ec8c.firebaseapp.com",
  databaseURL: "https://instagram-clone-5ec8c.firebaseio.com",
  projectId: "instagram-clone-5ec8c",
  storageBucket: "instagram-clone-5ec8c.appspot.com",
  messagingSenderId: "1087757410485",
  appId: "1:1087757410485:web:fbf6d48e847d36c8e91efc",
  measurementId: "G-7KDVE0XM8W",
});

const db = firebase.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

export { db, auth, storage };
