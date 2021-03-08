import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZyKjSGaMjaLoAtNrSiDD872En66nsLTo",
    authDomain: "facebook-clone-4f7b7.firebaseapp.com",
    projectId: "facebook-clone-4f7b7",
    storageBucket: "facebook-clone-4f7b7.appspot.com",
    messagingSenderId: "966189563455",
    appId: "1:966189563455:web:c1a591e9e011e8d5cc828a",
    measurementId: "G-NG8K7HEXTV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;