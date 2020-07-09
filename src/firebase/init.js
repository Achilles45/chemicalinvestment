import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbEnvhERJxNtEbswq0ORYlfhh_R7Gqe9E",
  authDomain: "chemical-investment.firebaseapp.com",
  databaseURL: "https://chemical-investment.firebaseio.com",
  projectId: "chemical-investment",
  storageBucket: "chemical-investment.appspot.com",
  messagingSenderId: "204790098831",
  appId: "1:204790098831:web:3cd59f5d45d9fd199a79fa",
  measurementId: "G-5VG7HBLE7M"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();