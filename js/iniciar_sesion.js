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
var infoInicioSesion = document.querySelector("#infoInicioSesion");

//Se captura el usuario y contraseña del formulario y se registra
$("#iniciar_sesion").click(function(event){
	event.preventDefault();

	var email = $("#inputEmail").val();
	var contrasena = $("#inputPassword").val();

	firebase.auth().signInWithEmailAndPassword(email, contrasena).catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		infoInicioSesion.textContent = error.message;
	});
	infoInicioSesion.textContent = "Inicio de sesión correcto";

});


