window.onload = function(){
	$("#manuales").fadeToggle();
	$("#electricas").fadeToggle();
	$("#iluminacion_bombillas").fadeToggle();
};

$("#electricas_icon").click(function(){
	$("#electricas").fadeToggle();
});

$("#manuales_icon").click(function(){
	$("#manuales").fadeToggle();
});

$("#iluminacion_icon").click(function(){
	$("#iluminacion_bombillas").fadeToggle();
});