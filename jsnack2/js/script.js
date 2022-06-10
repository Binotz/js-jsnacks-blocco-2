// Calcola la somma e la media dei primi 10 numeri.

//dichiaro variabili e inizializzo
const howManyNumbers = 10;
let somma = 0;
let media = 0;

for(let i = 1; i <= howManyNumbers; i++){
    //calcolo la somma
    somma += i;
}

//stampo la somma
console.log('somma: ', somma);

//calcolo la media e la stampo
media = somma / howManyNumbers;
console.log('media: ', media);
