// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

let array = [];
let total = 0;
let userInput;
//ciclo fino a che total è inferiore a 50
do{
    // recupero l'input
    userInput = parseInt(prompt('Inserisci un numero: '));
    // lo pusho nell'array
    array.push(userInput);
    //tengo traccia della somma dei vari input
    total += userInput;
    //stampo in console
    console.log("Totale: ", total);
    console.log("Contenuto array: ", ...array);
}while(total < 50);
