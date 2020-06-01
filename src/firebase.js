import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgB77kFBV80fbAUdP4n-4bPCQ_VSSZAY8",
  authDomain: "whatsper-c2703.firebaseapp.com",
  databaseURL: "https://whatsper-c2703.firebaseio.com",
  projectId: "whatsper-c2703",
  storageBucket: "whatsper-c2703.appspot.com",
  messagingSenderId: "150678201118",
  appId: "1:150678201118:web:a71b10e0983f40ebd5df0f",
  measurementId: "G-PG74LDMQEW"
};

firebase.initializeApp(firebaseConfig);

export default firebase