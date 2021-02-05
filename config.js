import * as firebase from "firebase"
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyALi--IGa0ohCgSR_O4NeZ-9T-q1ESqMX4",
    authDomain: "story-2c7e3.firebaseapp.com",
    projectId: "story-2c7e3",
    storageBucket: "story-2c7e3.appspot.com",
    messagingSenderId: "9949349700",
    appId: "1:9949349700:web:04a5fc1012d78d0d8e7911"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firbase.firestore();