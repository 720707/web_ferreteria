// Your web app's Firebase configuration

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


var db = firebase.firestore();

function observador(){
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	  	//$("#iniciarSesionBarNav").html("<li class='nav-item'><a class='nav-link'><i class='fas fa-user-plus'></i>" +</a></li></span>);
	    // User is signed in.
	    var displayName = user.displayName;
	    var email = user.email;
	    var emailVerified = user.emailVerified;
	    var photoURL = user.photoURL;
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    var providerData = user.providerData;
	    usuarioRegistrado(email);
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	  }
	});
}

observador();

function usuarioRegistrado(email){
	 $("#RegistrarBarNav").html("<li class='nav-item'><a class='nav-link disabled' href='#'>" + email + "</a></li>");
	 //Cambiar icono de iniciar sesion por uno de cerrar sesion
	 $("#IniciarSesionBarNav").html("<button id='cerrarSesionBoton' onclick='cerrar()' class='btn btn-secondary my-2 my-sm-0' type='submit'>Cerrar Sesion</button>");
}

function cerrar(){
	console.log("Click salir");
	firebase.auth().signOut().then(function(){
		$("#RegistrarBarNav").html("<li class='nav-item'><a class='nav-link' href='registrar_usuario.html'><i class='fas fa-user-plus'></i> Registrarse</a></li>");
	 	//Cambiar icono de iniciar sesion por uno de cerrar sesion
	 	$("#IniciarSesionBarNav").html("<li class='nav-item'><a class='nav-link' href='iniciar_sesion.html'><i class='fas fa-user'></i> Iniciar Sesion</a></li>");
	}).catch(function(error){
		console.log(error);
	})
}

//Obtener las herramientas electricas de la DB y crear un featurette para cada herramienta
db.collection("herramientas_electricas").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        $(".herramientas_electricas").append("<hr class='featurette-divider'> " + 
        	"<div class='row featurette'>" 
        	+ "<div class='col-md-7 info_producto'>" +
        	"<p><font size='3'>&nbsp <b>" + doc.data().Nombre + "</b> </p>"+
        	"<p>Precio: &nbsp" + doc.data().Precio + "</p>"+ 
        	"</div>" +
        	"<div class='col-lg-4 col-md-6 col-sm-6'>" +
        	"<img onClick='crearDocumento(" +doc.data().id+ ")' src=" + doc.data().Imagen + " width='150' height='125'>"
        	+ "</div> </div>");
    });
});

function crearDocumento(nombre){
	var nombre = nombre;
	console.log(nombre.toString());
	console.log("abriendo info producto");
	var doc = document.open("text/html","replace");
	var cabecera = "<!DOCTYPE html> <html> <head> <title>La Broca</title>" +
	"<meta name='viewport' content='width=device-width, initial-scale=1'>" +
    "<link rel='stylesheet' type='text/css' href='../bootstrap-4.3.1-dist/css/bootstrap.css'>"+
    "<script src='../js/jquery-3.4.1.js'></script>"+
    "<script src='../bootstrap-4.3.1-dist/js/bootstrap.min.js'></script>"+
    "<link rel='stylesheet' type='text/css' href='../css/herramientas_electricas.css'>"+
    "<link href='https://fonts.googleapis.com/css?family=Lato:400,700&display=swap' rel='stylesheet'>"+
    "<script src='https://kit.fontawesome.com/2ec255ffb9.js' crossorigin='anonymous'></script>"+
    "<script src='https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js'></script>"+
    "<script src='https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js'></script>"+
    "<script src='https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js'></script>"+
    "<script src='https://www.gstatic.com/firebasejs/6.2.0/firebase-firestore.js'></script>"+
	"<script>"+
	   "$(function(){"+
        "$('#includedBar').load('barra_navegacion.html');"+ 
        "$('#includedFooter').load('footer.html');"+
       "});"+
    "</script></head> <body> "+
    "<div id='includedBar'></div>";

    var contenido = "<div class ='container'> <p id='id_herr'>"+nombre+"</p> <div id='includedFooter'></div>"+
     "<script type='text/javascript' src='../js/obtener_herramienta.js'></script></body></html>";

	doc.write(cabecera);
	doc.write(contenido);
	doc.close();
}

