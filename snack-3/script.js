// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che
//  compongono il numero.

let numberUtente = prompt('scegli un numero di 4 cifre');
let contaNum;

if (numberUtente.length == 4) {
    console.log(numberUtente + '_' + numberUtente.length);

    contaNum = numberUtente.split('');
    let somma = 0;
    let index = 0;

while (index < contaNum.length) {
    console.log('index: ' , index);
    console.log('contanum ' ,contaNum[index]);
    
    somma += parseInt(contaNum[index]) ;
    index ++ ;

    console.log('somma' , somma);

    }
}

  
