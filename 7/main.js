// Stampa le potenze di 2 fino a 1000.

 var serieCubi = [];
 for (var i = 2; i <= 10; i++) { //metto i a 10 perchè pot di 2 alla 10 so che 1000
     var potenze = Math.pow(i, 2);
        console.log(potenze);
     serieCubi.push(potenze);
    }
 console.log(serieCubi);
