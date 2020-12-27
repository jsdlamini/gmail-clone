import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAmt2S9JBHeuDb3-CiBO1LsFhG2n99_M3k",
  authDomain: "clone-1e8f2.firebaseapp.com",
  projectId: "clone-1e8f2",
  storageBucket: "clone-1e8f2.appspot.com",
  messagingSenderId: "151768556478",
  appId: "1:151768556478:web:ce9cbf0d81bbb7bdfacfef",
  measurementId: "G-R714M8QJPP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider } 
