// in un array sono contenuti i nomi degli invitati alla festa
//  del grande Gatsby, chiedi all’utente il suo nome e comunicagli
//  se può partecipare o no alla festa.

const listaInvitati = [
    'paolo',
    'luca',
    'giovanni',
    'edoardo',
    'federico',
    'emanuele',
];

const btn = document.getElementById('invio');
console.log(btn)

btn.addEventListener('click', function(){
    let partecipanti = document.getElementById('invitato');
    partecipanti = partecipanti.value;
    console.log(partecipanti);

    let autorizzato = false;
    let indexTrovato ;
    

    for (let i = 0; i < listaInvitati.length; i++) {
        if(listaInvitati[i] === partecipanti){
            autorizzato = true;   
        }
        console.log(i)
    }
    if(autorizzato){
        alert ('benvenuto');
    }
    else{
        alert('accesso negato');
    }
    
});






