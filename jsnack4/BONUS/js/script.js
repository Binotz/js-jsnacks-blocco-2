// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

//BONUS: i dati li mette l'utente

const bonus = document.getElementById('bonus');
let array1 = [];
let array2 = [];
let arrays = [
    array1,
    array2
];

bonus.addEventListener('click', function(){
    array1 = [];
    array2 = [];
    arrays = [
        array1,
        array2
    ];
    //popolo il primo array
    do{
        userInput = prompt('Inserisci un numero per il primo array (premi . per smettere)');
        //se non è un . continuo a chiedere numeri
        if(userInput !== '.'){
            array1.push(parseInt(userInput));
        }
        // console.log(parseInt(userInput));
    }while(userInput !== '.');

    //popolo il secondo array
    do{
        userInput = prompt('Inserisci un numero per il secondo array (premi . per smettere)');
        //se non è un . continuo a chiedere numeri
        if(userInput !== '.'){
            array2.push(parseInt(userInput));
        }
        // console.log(parseInt(userInput));
    }while(userInput !== '.');

    console.log('Prima arrays: ', ...arrays);
    
    if(arrays[0].length === arrays[1].length){
        console.log('Array lunghi uguale!');
    } else{
        if (arrays[0].length > arrays[1].length){
            while(arrays[0].length > arrays[1].length){
                //genero number random...
                let randomNumber = Math.floor(Math.random() * 100) + 1;
                //... e lo pusho
                arrays[1].push(randomNumber);
            }
        } else{
            while(arrays[1].length > arrays[0].length){
                //genero number random...
                let randomNumber = Math.floor(Math.random() * 100) + 1;
                //... e lo pusho
                arrays[0].push(randomNumber);
            }
        }
    }
    console.log('Dopo arrays: ', ...arrays);

});



// let array1 = [1,4,2,6,8,3,4,11,43,22];
// let array2 = [4,6,5,3];
// console.log('Prima: ');
// console.log('lunghezza: ',array1.length, 'contiene: ',...array1);
// console.log('lunghezza: ',array2.length, 'contiene: ',...array2);

// //finchè array 2 è più corto di array1, aggiungo valori a caso
// while (array2.length < array1.length){
//     //genero number random...
//     let randomNumber = Math.floor(Math.random() * 100) + 1;
//     //... e lo pusho
//     array2.push(randomNumber);
// }

// console.log('Dopo: ');
// console.log('lunghezza: ',array1.length, 'contiene: ',...array1);
// console.log('lunghezza: ',array2.length, 'contiene: ',...array2);
