import firebase from 'firebase';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyBTORIT18Jvj0PpfcxUyuKvUe7MHToAG7Q",
    authDomain: "react-b924b.firebaseapp.com",
    projectId: "react-b924b",
    storageBucket: "react-b924b.appspot.com",
    messagingSenderId: "221371775542",
    appId: "1:221371775542:web:5072d225114b3f40bdb697",
    measurementId: "G-66L7K837DB"
  };
  // Initialize Firebase
  const fb=firebase.initializeApp(firebaseConfig);
 
  const auth=fb.auth();

  export{auth}

 