//Extra window
alert("Hi");
let name = prompt("Name: ",);
if (name != "") {
    confirm("Your name is "+name);
    document.write("Hi "+name);//Presentation
}else{
    confirm("I don't know your name");//In case there is no answer
}

//Get the elements
let list = new Array();
var title = documente.getElementbyId(title);
var quantity = documente.getElementbyId(quantity);
//var add = document.getElementbyId("add").style.backgroundColor = "blue";
document.getElementById("add").style.backgroundColor = "yellow";

function added(){
    
}

function total(){
    document.write("Hola "+name+". Has escogido "+quantity+ " de "+title);
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // También se puede acceder a los elementos a través de form.elements. Ejemplo -> form.elements.nombre.value
    console.log("Nombre de usuario: " + event.target.elements.nombre.value);
    console.log("Contraseña: " + event.target.clave.value);
    console.log("Email: " + event.target.email.value);
    console.log("Confirmación: " + event.target.confirmacion.checked);
    console.log("Suscripción: " + event.target.suscripcion.value);
    console.log("Nacionalidad: " + event.target.nacionalidad.value);
  });