function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parafo = document.getElementById("parafo");
    let muñeco = document.getElementById("muñeco");
    let textoCifrado = texto 
        .replece (/e/gi, "enter")
        .replece (/o/gi, "oud")
        .replece (/a/gi, "ai")
        .replece (/i/gi, "si")
        .replece (/u/gi, "ufa");

    if (texto.length !=0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con éxito";
        parafo.textContent = "";
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
    .replece (/enter/gi, "e")
    .replece (/oud/gi, "o")
    .replece (/ai/gi, "a")
    .replece (/si/gi, "i")
    .replece (/ufa/gi, "u");

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
