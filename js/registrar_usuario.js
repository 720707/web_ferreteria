// Firebase con Authentication para usuarios
var firebaseConfig = {
    apiKey: "AIzaSyDiRHZ3r8OjbLaXh0dUhGVn6StEXYwDf04",
    authDomain: "usuarios-ee0e3.firebaseapp.com",
    databaseURL: "https://usuarios-ee0e3.firebaseio.com",
    projectId: "usuarios-ee0e3",
    storageBucket: "usuarios-ee0e3.appspot.com",
    messagingSenderId: "316506880280",
    appId: "1:316506880280:web:08e782358f053bd092866d",
    measurementId: "G-HE7HTK8RGY"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

