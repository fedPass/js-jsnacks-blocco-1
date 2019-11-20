// L’utente inserisce due parole in successione, con due prompt.
// stampa prima la parola più corta
// poi la parola più lunga.

// NON FUNZIONA

var prima = prompt('Inserisci la prima parola');
console.log(prima);
var seconda = prompt('Inserisci la seconda parola');
console.log(seconda);

if ( prima.lenght < seconda.lenght ) {
    console.log('La parola più corta è ' + prima);
    console.log('La parola più lunga è ' + seconda);
} else if ( prima.lenght > seconda.lenght ) {
    console.log('La parola più corta è ' + seconda);
    console.log('La parola più lunga è ' + prima);
} else {
    console.log('Le parole hanno la stessa lunghezza');
}
