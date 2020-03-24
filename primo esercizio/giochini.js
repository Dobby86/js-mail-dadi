//1 Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un messaggio appropriato;

// chiediamo l email all utente


var email = prompt("inserisca email");

//fare lista email consentite

var lista = [ "google.it", "yahoo.it", "tiscali.it" , "outlook.it" ];

// dare lunghezza a email e lista
var listetta = lista.length;


// titolo per risultato
var risultatoGiusto = "error";

//----------------------------------------------


//Se la mia email è uguale alla prima email del mio array


// facciamo ciclo

 for (var i = 0; i < listetta ; i++) {



            if (email=== lista[ i ] ) {

                risultatoGiusto = "ok";
                console.log(lista[i]);

        }
        // else  {
        //
        //         risultatoGiusto = "error";
        //         console.log(risultatoGiusto);
        // }
 }

// stampare poi un messaggio

document.getElementById('games').innerHTML="accesso corretto? : " + risultatoGiusto ;
