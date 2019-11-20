// chiedere per 5 volte all’utente di inserire un numero.
// stampa la somma di tutti i numeri inseriti.
// due versioni, con il for e con il while.

// ciclo for
var lista = [];
for (var i = 0; i < 5; i++) {
    var numero = parseInt(prompt('Inserisci un numero'));
    lista.push(numero);
}
console.log(lista);

var somma = 0;
for (var i = 0; i < lista.length; i++) {
    somma = somma + lista[i];
    console.log(somma);
}
console.log('La somma dei numeri è ' + somma);

// ciclo while
var lista = [];
var i = 0;
var somma = 0;
while (i<5) {
    var numero = parseInt(prompt('Inserisci un numero'));
    lista.push(numero);
    somma = somma + lista[i];
    console.log(somma);
    i++;
}
console.log('La somma dei numeri è ' + somma);
