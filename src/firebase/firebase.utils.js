
import  firebase from "firebase/app"  //we're pulling off a database utils library
import "firebase/firestore"; //we only need few utils from the library so we pull firestore for a database
import "firebase/auth"; // an auth for authorization

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

export const createUserProfileDocument = async(userAuth, additionalData /*otherdata that we might need from*/) => { // we create this function in order to take a user in authorization table to firebase store. actually storing our users as they loggin in. async because it's an api request. 

  if(!userAuth) return; //if there's no userAuth, we just want to exit without doing anything

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists){
    // we want to check if we have a user existing our database, if not we create a new user
    const { displayName, email } = userAuth; //distructuring the data that we need from the userAuth. displayname and email
    const createdAt = new Date(); //we also want to check what time the user was created

    try {
      await userRef.set({
        //creating a new user from the data we receive from logging with google. also passing the addition data we might need
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in creating user", error.message);
    }
  }

return userRef; 
}

firebase.initializeApp(config); // we're initializing the config we got from the firebase all

export const auth = firebase.auth(); //step1
export const firestore =firebase.firestore() //step 2;

const provider = new firebase.auth.GoogleAuthProvider(); //this gives us an access to google provider outhethication
provider.setCustomParameters({prompt: "select_account"});// this means that we always want to trigger a google popup when ever we use google auth provider for authethication and signin
export const signInWithGoogle = ()=> auth.signInWithPopup(provider); //the signInwithGoogle takes google signin authethication because we have many signins e.g Twitter, facebook and forth

export default { firebase , signInWithGoogle };