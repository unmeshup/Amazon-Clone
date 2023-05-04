import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDUEtukGzK5bXpNt3rtjngZUAfmWV1ChQU",
    authDomain: "clone-app-d9564.firebaseapp.com",
    projectId: "clone-app-d9564",
    storageBucket: "clone-app-d9564.appspot.com",
    messagingSenderId: "310481168152",
    appId: "1:310481168152:web:4a3a010ab7adfb0d7fa06d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };