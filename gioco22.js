// Gioco dei dadi, chi fa di più vince.

//primo lanciatore
var utentePrimo = parseInt(prompt("lancio 1"));
console.log("primo lancio");



//secondo lanciatore
var utenteSecondo = parseInt(prompt("lancio 2"));

console.log("secondo lancio");

//punteggi diversi di 1 punto

// diamo un nome al risultato

var risultatoPiuAlto;

// calcolo di maggioranza

if (utentePrimo > utenteSecondo) {
    risultatoPiuAlto = "vince player 1"
} else if (utentePrimo < utenteSecondo) {
    risultatoPiuAlto = "vince player 2"
}else {
    risultatoPiuAlto ="split=stesso risultato";
}



document.getElementById('spero').innerHTML = risultatoPiuAlto;
