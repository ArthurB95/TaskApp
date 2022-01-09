import firebase from 'firebase';
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvcggP7SGACN9CcEHjAfGjqBjI2-YTMJM",
  authDomain: "tasksapp-b5a6c.firebaseapp.com",
  projectId: "tasksapp-b5a6c",
  storageBucket: "tasksapp-b5a6c.appspot.com",
  messagingSenderId: "307743835807",
  appId: "1:307743835807:web:47ffab64bfebe0755284aa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;