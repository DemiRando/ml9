// Import the functions you need from the SDKs you need
import { initializeApp,getApps ,getApp} from "firebase/app"
import { getAuth, setPersistence,browserLocalPersistence,onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {FIREBASE_KEY,FIREBASE_ID,FIREBASE_MESSENGER} from '@env'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "ml9ja-e7e2b.firebaseapp.com",
  projectId: "ml9ja-e7e2b",
  storageBucket: "ml9ja-e7e2b.appspot.com",
  messagingSenderId: FIREBASE_MESSENGER,
  appId: FIREBASE_ID,
};


// Initialize Firebase
const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
/*onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});




setPersistence(auth, browserLocalPersistence)
.then(() => {
  // Existing and future Auth states are now persisted in the current
  // session only. Closing the window would clear any existing state even
  // if a user forgets to sign out.
  // ...
  // New sign-in will be persisted with session persistence.
 
    
})
.catch((error) => {
  // Handle Errors here.
  const errorCode = error.code;
  const errorMessage = error.message;
});
*/
export { auth ,db};


