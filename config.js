//firebase config key setup

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'




const firebaseConfig = {
    apiKey: "AIzaSyCiIxFTLzixleBmmUFvhQYP-nnkp8sB1qw",
    authDomain: "authentication-cf12c.firebaseapp.com",
    projectId: "authentication-cf12c",
    storageBucket: "authentication-cf12c.appspot.com",
    messagingSenderId: "617507157322",
    appId: "1:617507157322:web:088fe83bf438e016b3fdb3",
    measurementId: "G-BTKHMQ5P16"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export { firebase };