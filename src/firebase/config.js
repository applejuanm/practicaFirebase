/*
* npm install firebase
*/

import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyC2Cezex94mX47HnB1F254lFj02tyadiGQ",
      authDomain: "test-workarround-d4302.firebaseapp.com",
      projectId: "test-workarround-d4302",
      storageBucket: "test-workarround-d4302.appspot.com",
      messagingSenderId: "886026029630",
      appId: "1:886026029630:web:7dd4e4f35c7b66fb8d9f6f",
      measurementId: "G-Y9F6JY6XED"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  export default firebase.firestore();