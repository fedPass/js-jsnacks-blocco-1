// In un array sono contenuti i nomi degli invitati alla festa
// chiedi all’utente il suo nome
// comunicagli se può partecipare o no alla festa.

var invitati = ['Angela','Elisa', 'Giovanni'];
console.log(invitati);

var nome = prompt('Inserisci il tuo nome');
var nomeTrovato = false;
for (var i = 0; (i < invitati.length) && (nomeTrovato == false); i++) {
    if (nome.toLowerCase() == invitati[i].toLowerCase() ) {
        nomeTrovato = true;
    }
}

if (nomeTrovato = true) {
    console.log('Prego, puoi entrare alla festa!');
} else {
    console.log('Non puoi entrare alla festa!');
}
