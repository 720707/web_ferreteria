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

function observador(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	//$("#iniciarSesionBarNav").html("<li class='nav-item'><a class='nav-link'><i class='fas fa-user-plus'></i>" +</a></li></span>);
	    // User is signed in.
	    var displayName = user.displayName;
	    console.log(displayName);
	    var email = user.email;
	    var emailVerified = user.emailVerified;
	    var photoURL = user.photoURL;
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    var providerData = user.providerData;
	    usuarioRegistrado();
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	  }
	});
}

observador();

function usuarioRegistrado(){
	 $("#RegistrarBarNav").html("<li class='nav-item'><a class='nav-link' href='#'><i class='fas fa-user-plus'></i>" + email + "</a></li>");
	 //Cambiar icono de iniciar sesion por uno de cerrar sesion
	 //$("#IniciarSesionBarNav").html()
}