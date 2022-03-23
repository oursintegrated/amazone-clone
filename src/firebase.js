import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqjWuxMyXmXEk_KuUFEpNW-lcog3fRnA8",
  authDomain: "e-clone-f9846.firebaseapp.com",
  projectId: "e-clone-f9846",
  storageBucket: "e-clone-f9846.appspot.com",
  messagingSenderId: "858832987558",
  appId: "1:858832987558:web:20ce2658e9b5ce525a5b67",
  measurementId: "G-EPKH60XJM9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
