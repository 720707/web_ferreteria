// Firebase con Authentication para usuarios
var firebaseConfig = {
    apiKey: "AIzaSyBr3K0g46i_ZQVj_YsIisccyL2S_9TZc_0",
	authDomain: "ferreteria-81897.firebaseapp.com",
	databaseURL: "https://ferreteria-81897.firebaseio.com",
	projectId: "ferreteria-81897",
	storageBucket: "ferreteria-81897.appspot.com",
	messagingSenderId: "1093455286088",
	appId: "1:1093455286088:web:22df8c50daa880e45b6d7d",
	measurementId: "G-3F79NE21KJ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var infoRegistro = document.querySelector("#infoRegistro");

//Se captura el usuario y contraseña del formulario y se registra
$("#registrar").click(function(event){
	event.preventDefault();
	console.log("Registrando usuario");
	var email = $("#inputEmail").val();
	var contrasena = $("#inputPassword").val();
    console.log("Registrando usuario 2" + email + contrasena);
	firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  infoRegistro.textContent = error.message;
	  console.log(errorCode + " " + errorMessage);
	  // ...
	});
	infoRegistro.textContent = "Registro correcto";
	console.log("Registro correcto");

});

