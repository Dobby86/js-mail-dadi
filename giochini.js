//1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// chiediamo l email all utente


var email = prompt("inserisca email");

//fare lista email consentite

var lista = ["google", "yahoo", "tiscali" , "outlook"];

// dare lunghezza a email e lista
var listetta = lista.length;

var lunghezzaEmail = email.length;

// titolo per risultato
var risultatoGiusto;

//----------------------------------------------


//Se la mia email è uguale alla prima email del mio array


// facciamo ciclo

 for (var i =0; i < lista.length ; i++)

    if (email== lista[1] ) {

        risultatoGiusto = "ok";
        console.log(lista[i]);

}
else  {

        risultatoGiusto = "error";
        console.log(risultatoGiusto);
}


// stampare poi un messaggio

document.getElementById('games').innerHTML="accesso corretto? : " + risultatoGiusto ;
