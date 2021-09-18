import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7WfBg0U87iNVxhXyEGkKkBOmxxMincxM",
    authDomain: "fir-946cb.firebaseapp.com",
    projectId: "fir-946cb",
    storageBucket: "fir-946cb.appspot.com",
    messagingSenderId: "906009294569",
    appId: "1:906009294569:web:da8928a8fe3de8b878a278",
    measurementId: "G-J5VG15K94P"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};