import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9wU9MaZUPngIC985zTi50pLJIBf8NoAY",
    authDomain: "crwn-clothing-db-33047.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-33047.firebaseio.com",
    projectId: "crwn-clothing-db-33047",
    storageBucket: "crwn-clothing-db-33047.appspot.com",
    messagingSenderId: "267177074985",
    appId: "1:267177074985:web:dc32fef4b790fe2adc1738",
    measurementId: "G-QC9XCJ2JPY"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;