function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parafo = document.getElementById("parafo");
    let muñeco = document.getElementById("muñeco");
    
    let textoCifrado = texto.replace (/e/g, "enter")
        .replace (/o/g, "oud")
        .replace (/a/g, "ai")
        .replace (/i/g, "si")
        .replace (/u/g, "ufa");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con éxito";
        parafo.textContent = " ";
        muñeco.scr = "/Challenges/images/alura_logo.jpg";
    } else {
        muñeco.scr = "/Challenges/images/body.png";
        tituloMensaje.textContent ="Nigun mensaje fue encontrado";
        parafo.textContent = "Ingresa el texto que desea encriptar o desencriptar";

        alert("Desbes de ingresar un texto");
    }
}
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parafo = document.getElementById("parafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto
    .replace (/enter/g, "e")
    .replace (/oud/g, "o")
    .replace (/ai/g, "a")
    .replace (/si/g, "i")
    .replace (/ufa/g, "u");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con éxito";
        parafo.textContent = "";
        muñeco.scr = "/Challenges/images/body.png";
    } else {
        muñeco.scr = "/Challenges/images/body.png";
        tituloMensaje.textContent ="Nigun mensaje fue encontrado";
        parafo.textContent = "Ingresa el texto que desea encriptar o desencriptar";
        alert("Desbes de ingresar un texto");
    
    }
}