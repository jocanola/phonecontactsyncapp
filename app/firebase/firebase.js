import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDu1lcg1rfKRKe92mdmIo4lf1c5vs0HXs0",
  authDomain: "contactsyncapp-c980f.firebaseapp.com",
  projectId: "contactsyncapp-c980f",
  storageBucket: "contactsyncapp-c980f.appspot.com",
  messagingSenderId: "1083039482725",
  appId: "1:1083039482725:web:fe19ef9c6a4f89021b978c",
  measurementId: "G-36HV4761CB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };