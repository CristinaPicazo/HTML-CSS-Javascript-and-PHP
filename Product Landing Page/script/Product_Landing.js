function show() {
    var elemento = document.getElementById("aditional");
    
    if (elemento.className == "hide") {
        elemento.className = "visible";
        elemento = document.getElementById("link_1");
        elemento.innerHTML = "Hide it";
    } else {
        elemento.className = "hide";
        elemento = document.getElementById("link_1");
        elemento.innerHTML = "Continue Reading";
    }
}


function submit(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var comments = document.getElementById("comments").value;

alert("Hi" + name + "with email address"+email+ ". I appreciate your comments ("+comments+ "), but this is just a test.");
}
