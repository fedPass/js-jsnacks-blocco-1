// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.
var numero = parseInt(prompt('Inserisci un numero'));
var serieCubi = [];
for (var i = 1; i <= numero; i++) {
    var numCubo = Math.pow(i, 3); //numero * numero * numero;
    console.log(numCubo);
    serieCubi.push(numCubo);
}
console.log(serieCubi);
