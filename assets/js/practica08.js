// DOM
// Document Objet Model

let btnPrueba = document.getElementById('btnPrueba');
let tituloPagina = document.getElementById('tituloPagina');


const mensajeAlerta = () =>{
    console.log("Works it!");
}


// Los Onclick se llaman al final de codigo 

// btnPrueba.onclick = function(){}
// evento con funcion flecha
btnPrueba.onclick = ()  =>{
    mensajeAlerta();
};

tituloPagina.onclick = ()  =>{
    mensajeAlerta();
};