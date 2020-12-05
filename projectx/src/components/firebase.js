import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCY5hMy7MoUVoJmUTSfTjtdly3UsCs5VSI",
  authDomain: "projectx-59941.firebaseapp.com",
  databaseURL: "https://projectx-59941.firebaseio.com",
  projectId: "projectx-59941",
  storageBucket: "projectx-59941.appspot.com",
  messagingSenderId: "167468309483",
  appId: "1:167468309483:web:0104c927f6e1dc5c4f17ae",
  measurementId: "G-02H08L1QGT",
});

const auth = firebase.auth();

export { auth };
