// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const arrayVuoto = [];
let numeriCasuali;

for ( i = 0; i < 6; i++) {
    numeriCasuali = parseInt(prompt('scegli un numero'));

    if(numeriCasuali % 2 != 0){
        arrayVuoto.push(numeriCasuali)
    }
    else{
        
    }
}