import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBiz6j8lAjpJTPoj5wqJa6UZ_vhY6XpVS4",
  authDomain: "crown-db-b2c26.firebaseapp.com",
  projectId: "crown-db-b2c26",
  storageBucket: "crown-db-b2c26.appspot.com",
  messagingSenderId: "761235603356",
  appId: "1:761235603356:web:b319f740d7842b86be9259",
  measurementId: "G-5VZGT5SL3R",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
