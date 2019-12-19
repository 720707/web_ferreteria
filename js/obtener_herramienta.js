// Your web app's Firebase configuration
console.log("Script para herramienta individual");
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

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var nom_producto = getCookie("nom_producto");
var coleccion = getCookie("nom_coleccion");
console.log(nom_producto);

//Funcion para obtener la información de un herramienta especifica mediante el nombre
//de esta
db.collection(coleccion).where("Nombre", "==", nom_producto)
    .get()
    .then(function(querySnapshot) {
    	console.log("Buscando herramienta" + nom_producto)
        querySnapshot.forEach(function(doc) {
        	console.log("Mostrando herramienta");
        	if(coleccion == "herramientas_electricas" || coleccion == "herramientas_manuales"){
        		$("#producto").append("<hr class='featurette-divider'> " + 
	        	"<div class='row featurette'>" 
	        	+ "<div class='col-md-7 order-md-2 info_producto'>" +
	        	"<p><font size='3'>&nbsp <b>" + doc.data().Nombre + "</b> </p>"+
	        	"<p>Precio: &nbsp" + doc.data().Precio + "</p>"+ 
	        	"<p>Unidades Disponibles: &nbsp " + doc.data().Unidades +" </p>" + 
	        	"<p>Marca: &nbsp " + doc.data().Marca + "</p>" +
	        	"<p>Otras características: &nbsp Medidas : " + doc.data().Medidas + "</p>" +
	        	"<p>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Peso: " + doc.data().Peso + "</p>" +
	        	"</div>" +
	        	"<div class='col-lg-4 col-md-6 col-sm-6 order-md-1'>" +
	        	"<img src=" + doc.data().Imagen + " width='300' height='275'>"
	        	+ "</div> </div>" +
	            "<button class='btn btn-primary' type='button'><i class='fas fa-shopping-cart'></i>Comprar</button> ");
        	}else{
        		$("#producto").append("<hr class='featurette-divider'> " + 
	        	"<div class='row featurette'>" 
	        	+ "<div class='col-md-7 order-md-2 info_producto'>" +
	        	"<p><font size='3'>&nbsp <b>" + doc.data().Nombre + "</b> </p>"+
	        	"<p>Precio: &nbsp" + doc.data().Precio + "</p>"+ 
	        	"<p>Unidades Disponibles: &nbsp " + doc.data().Unidades +" </p>" + 
	        	"<p>Marca: &nbsp " + doc.data().Marca + "</p>" +
	        	"<p>Otras características: &nbsp Potencia : " + doc.data().Potencia + "</p>" +
	        	"<button class='btn btn-primary' type='button'><i class='fas fa-shopping-cart'></i>Comprar</button> "+
	        	"</div>" +
	        	"<div class='col-lg-4 col-md-6 col-sm-6 order-md-1'>" +
	        	"<img src=" + doc.data().Imagen + " width='300' height='275'>"
	        	+ "</div> </div>");
        	}
            
        	console.log("Mostrando herramienta");
    	});
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

