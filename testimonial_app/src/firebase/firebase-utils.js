import firebase from 'firebase';

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyA5zwGzhR7biKKIOlmeDWfIb3QsrY7Vp_k",
//     authDomain: "testimonials-439d1.firebaseapp.com",
//     projectId: "testimonials-439d1",
//     storageBucket: "testimonials-439d1.appspot.com",
//     messagingSenderId: "799345148650",
//     appId: "1:799345148650:web:3431092e609c614f974d93",
//     measurementId: "G-CV6PMQY40G"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

const firebaseConfig = { 
  apiKey: "AIzaSyA5zwGzhR7biKKIOlmeDWfIb3QsrY7Vp_k",
  authDomain: "testimonials-439d1.firebaseapp.com",
  projectId: "testimonials-439d1",
  storageBucket: "testimonials-439d1.appspot.com",
  messagingSenderId: "799345148650",
  appId: "1:799345148650:web:3431092e609c614f974d93",
  measurementId: "G-CV6PMQY40G"
};

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
