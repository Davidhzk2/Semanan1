let btnPrueba  = document.getElementById('btnPrueba');
let nombre = document.getElementById('nombre');

const registrarNombre = () =>{
    let nombre = prompt("Ingrese su nombre:");
    // this hace referencia a las variables globales 
    this.nombre.innerHTML = "Nombre: "+nombre;
}

btnPrueba.onclick = () =>{
    registrarNombre();
}