import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAcR11MhGx4_OleQ-brP_CJpMFnxhqcjV8",
    authDomain: "guitar-chords-app-fef40.firebaseapp.com",
    databaseURL: "https://guitar-chords-app-fef40.firebaseio.com",
    projectId: "guitar-chords-app-fef40",
    storageBucket: "guitar-chords-app-fef40.appspot.com",
    messagingSenderId: "702433788465",
    appId: "1:702433788465:web:5755f322eb9ccfd4388b10"
};

// Initializing Firebase
firebase.initializeApp(firebaseConfig);

// Exporting the CONFIGURED version of firebase
export default firebase;
