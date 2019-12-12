import {getObservador} from '../herramientas_electricas.js';

getObservador();

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

//Obtener las herramientas de la DB y crear un featurette para cada herramienta
db.collection("herramientas_electricas").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        $(".herramientas_electricas").append("<hr class='featurette-divider'> " + 
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
        	+ "</div> </div>");
    });
});


