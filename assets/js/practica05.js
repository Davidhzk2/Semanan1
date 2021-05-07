/** Operaciones 
 *
 */

const sumaDosNumeros = () =>{
     let num1 = prompt("Ingrese el numero 1");
    let num2 = prompt("Ingrese el numero 3");
    console.log(num1, num2);
    let resultado = parseInt(num1) + parseInt(num2);
    console.log(resultado);
};
// Resta
const restaDosnNumeros = () =>{
     let num1 = prompt("Ingrese el numero 1");
    let num2 = prompt("Ingrese el numero 3");
    console.log(num1, num2);
    let resultado = parseInt(num1) - parseInt(num2);
    console.log(resultado);
};
// Multiplicacion
const multDosnNumeros = () =>{
     let num1 = prompt("Ingrese el numero 1");
    let num2 = prompt("Ingrese el numero 3");
    console.log(num1, num2);
    let resultado = parseInt(num1) * parseInt(num2);
    console.log(resultado);
};
// Division
const diviDosNumeros = () =>{
    let num1 = prompt("Ingrese el numero 1");
    let num2 = prompt("Ingrese el numero 3");
    console.log(num1, num2);
    // if( num2 == 0){
    //     console.log("No se puede divir por cero");
    // }else{
    //     console.log("Prueba 1: "+ resultado);
    // }

    // Operador ternario arroja un valor y un mensaje  y solo para un true o false 
    let resultado = num2 == 0 ? console.log("No se puede divir por cero") : console.log(num1 /num2);
    
};
