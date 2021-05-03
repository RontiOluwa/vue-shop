
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwb3NX9OM2EpAOm8SzG2bo5kNqcXpFTIQ",
    authDomain: "vue-shop-2bc26.firebaseapp.com",
    databaseURL: "https://vue-shop-2bc26-default-rtdb.firebaseio.com/",
    projectId: "vue-shop-2bc26",
    storageBucket: "vue-shop-2bc26.appspot.com",
    messagingSenderId: "G-HPQHBWXMHX"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}