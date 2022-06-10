// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

let array1 = [1,4,2,6,8,3,4,11,43,22];
let array2 = [4,6,5,3];
console.log('Prima: ');
console.log('lunghezza: ',array1.length, 'contiene: ',...array1);
console.log('lunghezza: ',array2.length, 'contiene: ',...array2);

//finchè array 2 è più corto di array1, aggiungo valori a caso
while (array2.length < array1.length){
    //genero number random...
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //... e lo pusho
    array2.push(randomNumber);
}

console.log('Dopo: ');
console.log('lunghezza: ',array1.length, 'contiene: ',...array1);
console.log('lunghezza: ',array2.length, 'contiene: ',...array2);
