// L’utente inserisce due numeri in successione, con due prompt.
// stampa il maggiore.

var primo = parseInt(prompt('Inserisci il primo numero'));
console.log(primo);
var secondo = parseInt(prompt('Inserisci il secondo numero'));
console.log(secondo);
if (primo == secondo ) {
    console.log('I numeri sono pari');
} else {
    var maggiore = 0;
    if (primo < secondo) {
        maggiore = secondo;
    } else {
        maggiore = primo
    }
    console.log('Il numero maggiore è ' + maggiore);
}
