import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth' 
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDi8OwceNzhAq1OQEfRNHSpfjtCBLUlFsA",
    authDomain: "react-firebase-wahyu.firebaseapp.com",
    databaseURL: "https://react-firebase-wahyu.firebaseio.com",
    projectId: "react-firebase-wahyu",
    storageBucket: "react-firebase-wahyu.appspot.com",
    messagingSenderId: "71475738875"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true  });

  export default firebase;