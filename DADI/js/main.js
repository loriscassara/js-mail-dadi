/*************** 
    CODE RANDOM NUMBER
***************/

const sendBtn = document.querySelector('#btn-input'); //dichiarazione variabile del bottone di invio
//console.log('Bottone di invio:', sendBtn);

/*
* Creazione evento di click variabile sendBtn
* per rendere visibili altri elementi
*/

sendBtn.addEventListener('click', function(){
    const userGenNumber = Math.floor(Math.random()*6 + 1); //dichiarazione variabile randomica da 1 a 6
    //console.log('Numero generato:', userGenNumber);
    const computerGenNumber = Math.floor(Math.random()*6 + 1); //dichiarazione variabile randomica da 1 a 6
    //console.log('Numer generato:', computerGenNumber);

    /*
    * Creazione if per definire il numero
    * più alto dei due
    */
    
    if (userGenNumber > computerGenNumber){
        document.querySelector('#user-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#computer-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#userNumber-output').innerHTML = `${userGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#computerNumber-output').innerHTML = `${computerGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#message-output').innerHTML = `<p class="fw-bold text-success">Hai vinto!</p>` //scrive il paragrafo di vittoria nell'HTML
    } else if (userGenNumber < computerGenNumber){
        document.querySelector('#user-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#computer-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#userNumber-output').innerHTML = `${userGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#computerNumber-output').innerHTML = `${computerGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#message-output').innerHTML = `<p class="fw-bold text-danger">Hai perso!</p>` //scrive il paragrafo di perdita nell'HTML
    } else {
        document.querySelector('#user-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#computer-icon').classList.remove('d-none'); //rende visibile la variabile in HTML
        document.querySelector('#userNumber-output').innerHTML = `${userGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#computerNumber-output').innerHTML = `${computerGenNumber}`; //inserisce nell'HTML il numero generato
        document.querySelector('#message-output').innerHTML = `<p class="fw-bold text-warning">Pareggio!</p>` //scrive il paragrafo di pareggio nell'HTML
    }
})