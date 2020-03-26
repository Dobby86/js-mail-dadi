// Gioco dei dadi, chi fa di più vince.

//primo lanciatore
var utente = prompt("lancio 1");
console.log(" l ' utente tira " + utente);



//secondo lanciatore
var utentePc = Math.floor((Math.random("lancio 2")* 6)+ 1 );

console.log("il Pc tira " + utentePc);

//punteggi diversi di 1 punto

// diamo un nome al risultato

var risultatoPiuAlto;

// calcolo di maggioranza

if (utente > utentePc) {
    risultatoPiuAlto = "vince l' utente con :"+ utente;
} else if (utente < utentePc) {
    risultatoPiuAlto = "vince il pc con :" + utentePc;
}else {
    risultatoPiuAlto ="split=stesso risultato" ;
}



document.getElementById('spero').innerHTML = risultatoPiuAlto;
