// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt('Inserisci un numero di 4 cifre');
console.log('hai inserito ' + numero);
numeroStr = numero.toString();
var numeri = [];
for (var i = 0; i < numeroStr.lenght; i++) {
    numeri.push(numeroStr.charAt(i))
}
console.log(numeri);

var somma = 0;
for (var i = 0; i < numeri.length; i++) {
    somma = somma + numeri[i];
}

console.log('la somma è ' + somma);

// if (numero.lenght != 4) {
//     console.log('Non hai inserito un numero da 4 cifre');
// } else {
//     console.log(numero);
// }

// if (numero.lenght == 4) {
//     var somma = 0;
//     for (var i = 0; i < 4; i++) {
//         somma = somma + numero[i]
//     }
// } else {
//     console.log('Non hai inserito un numero da 4 cifre');
// }
