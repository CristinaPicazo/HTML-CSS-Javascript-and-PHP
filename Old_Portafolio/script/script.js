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

$(document).ready(function() {
    $("h2").addClass("animated bounce");
});