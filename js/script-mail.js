/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */


var userMail = prompt("Scrivi qui la tua email:");
console.log(userMail);

var allowedMail = ["marco@gmail.com", "luigi@gmail.com", "davide@gmail.com"];
console.log(allowedMail);

var display = document.getElementById("display");

var isAllowed = false;
for (var i = 0; i < allowedMail.length; i++) {
    if (userMail === allowedMail[i]) {
        console.log("User mail: " , userMail);
        console.log ("The mail is present in the list of the mails allowed: " + allowedMail[i]);
        isAllowed = true;
    } 
}

if (isAllowed) {
    display.innerHTML = "L' email è stata approvata";
} else {
    display.innerHTML = "Attenzione! La mail inserita non è valida";      
}



