/*************** 
    CODE ENTER MAIL
***************/

const mailList = ['loriscassara2003@gmail.com', 'loriscassara@gmail.com', 'cassaralavoro@gmail.com']; //dichiarazione variabili in array
//console.log('Mail nella lista:', mailList);
const sendBtn = document.querySelector('#btn-send'); //dichiarazione variabile bottone di invio
//console.log('Bottone invia:', sendBtn);
const delateBtn = document.querySelector('#btn-delate'); //dochiarazione variabile bottone di annullamento
//console.log('Bottone di annulla:', delateBtn);

/*
* Evento di "click" sul pulstante di invio per ricevere le
* informazioni dell'utente
*/

sendBtn.addEventListener('click', function(){
    const mailUserInput = document.querySelector('.form-control').value; //dichiarazione variabile della mail inserita dall'utente
    //console.log('Mail user:', mailUserInput);

    /*
    * Ciclo for per capire se la mail inserita dall'utente
    * appartiene all'array
    */

    for (let i = 0; i < mailList.length; i++){
        let currentMail = mailList[i]; //dichiarazione variabile per indicare il numero corrente nell'array
    
        /*
        * If e else per creare condizioni in caso la mail
        * fosse presente e NON nell'array
        */

        if (mailUserInput == currentMail){ //se la mail inserita dall'utente e' presente nell'array allora..
            document.querySelector('#mail-output').innerHTML = `<p class="text-center text-success fw-bold pb-2">Mail trovata! Benvenuto</p>`;
            document.querySelector('.form-control').classList.add('my-border-green');
            break; //comando usato per informarmare al for di fermarsi una volta trovata la mail e di non continuare
        } else { //se la mail non e' presente allora..
            document.querySelector('#mail-output').innerHTML = `<p class="text-center text-danger fw-bold pb-2">Mail non corretta.. riprovare</p>`;
            document.querySelector('.form-control').classList.add('my-border-red');
        }
    }
})

/*
* Evento di "click" sul pulstante di annulla per riavviare
* la pagina HTML allo stato iniziale
*/

delateBtn.addEventListener('click', function(){
    window.location.reload();  //funzione per il refresh della pagina HTML
})