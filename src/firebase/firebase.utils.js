import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";


const config = {
  apiKey: "AIzaSyChDaepiiebmo2cXmcj8lHqwpc_JAm27po",
  authDomain: "crwn-db-clthing.firebaseapp.com",
  databaseURL: "https://crwn-db-clthing.firebaseio.com",
  projectId: "crwn-db-clthing",
  storageBucket: "crwn-db-clthing.appspot.com",
  messagingSenderId: "308344624348",
  appId: "1:308344624348:web:2338909161c5926a259019",
  measurementId: "G-RC97V9GT1Z",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;