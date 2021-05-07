// Practica 10 

btnPrueba = document.getElementById('btnPrueba');
const spamLink = () =>{
    for (let i = 0;  i < 5;  i++) {
        window.open("https://www.w3schools.com/js/js_htmldom_events.asp");
    }

}

// eventlistener eveto, action eventos diferentes al click
// call back espera que se haga el llamado 

btnPrueba.addEventListener("click",() => {
    spamLink();
});