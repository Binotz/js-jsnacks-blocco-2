// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

const forVersion = document.getElementById('forVersion');
const whileVersion = document.getElementById('whileVersion');


//For Version
forVersion.addEventListener('click',function(){
    let input;
    let sum = 0;
    for(let i = 0; i < 5; i++){
        //chiedo input all'utente
        input = parseInt(prompt('(FOR) Inserisci un numero: '));
        //sommo i valori inseriti
        sum += input;
    }
    //output
    console.log('For version: ', sum);
});


whileVersion.addEventListener('click', function(){
    //while version
    let i = 0;
    let sum = 0;
    while ( i < 5) { 
        // chiedo all'utente il humero
        let userNumber = parseInt(prompt ('(WHILE) Inserisci un numero: '));
        // effettuo la somma
        sum += userNumber;
        console.log(sum)
        i++
    }
    //output
    console.log('while version: ', sum);

});
