import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyAGfwqhRYJ1_bFCXSN6jP2QHOpuwBW0ogM",
  authDomain: "main-ecom1.firebaseapp.com",
  projectId: "main-ecom1",
  storageBucket: "main-ecom1.appspot.com",
  messagingSenderId: "809549034170",
  appId: "1:809549034170:web:73f92ca4e7e78383274883",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
