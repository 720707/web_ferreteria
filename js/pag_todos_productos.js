
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();


db.collection("productos").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

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