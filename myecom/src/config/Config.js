import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAc6fxqrAsyKFx3lRmrBG8T7tlJ3tTQ45A",
  authDomain: "myecom-4ddda.firebaseapp.com",
  projectId: "myecom-4ddda",
  storageBucket: "myecom-4ddda.appspot.com",
  messagingSenderId: "110279553456",
  appId: "1:110279553456:web:8d55c5e9ecd04a7ebd2675"
};

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth, db, storage};