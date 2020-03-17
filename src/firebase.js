import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDgrE_3NmDxEp7Zw8jtObEfNV3pLcKZcl4",
  authDomain: "bt3103lec.firebaseapp.com",
  databaseURL: "https://bt3103lec.firebaseio.com",
  projectId: "bt3103lec",
  storageBucket: "bt3103lec.appspot.com",
  messagingSenderId: "876146062133",
  appId: "1:876146062133:web:c8e93b582c57a93a75927c",
  measurementId: "G-6DE5CQQLTB"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;