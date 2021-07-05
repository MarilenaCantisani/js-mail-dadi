/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato. */


var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;
console.log ("Giocatore uno: ", player1);
console.log ("Giocatore due: ", player2);

var display = document.getElementById ("display");

if (player1 > player2) {
    console.log ("Il giocatore 1 ha vinto");
    display.innerHTML = "Il giocatore 1 ha vinto";
} else if (player1 < player2){
    console.log ("Il giocatore 2 ha vinto");
    display.innerHTML = "Il giocatore 2 ha vinto";
} else {
    console.log ("Pareggio");
    display.innerHTML = "Pareggio";
}