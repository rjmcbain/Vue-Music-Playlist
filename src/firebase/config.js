import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDV9f9-WupJaUnuDFWlk66c06VtCGUDJXo",
  authDomain: "music-playlist-fa074.firebaseapp.com",
  projectId: "music-playlist-fa074",
  storageBucket: "music-playlist-fa074.appspot.com",
  messagingSenderId: "1080351879002",
  appId: "1:1080351879002:web:0c9f0889208a5ea6d9cd63",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
