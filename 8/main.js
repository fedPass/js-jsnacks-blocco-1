// Chiedi un numero di 4 cifre all’utente
// calcola la somma di tutte le cifre che compongono il numero.

var numero = prompt('Inserisci un numero di 4 cifre');
console.log(numero);
// if (numero.lenght != 4) {
//     console.log('Hai inserito un numero che non ha 4 cifre')
// } else {
    var somma = 0;
    for (var i = 0; i < numero.length; i++) {
        somma = (somma) + parseInt(numero[i]);
    }
    console.log('la somma è ' + somma);
// }
