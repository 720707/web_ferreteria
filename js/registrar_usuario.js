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

//Se captura el usuario y contraseña del formulario y se registra
$("#registrar").click(function(){
	var email = $("#inputEmail").val();
	var contrasena = $("#inputPassword").val();

	firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...

});

