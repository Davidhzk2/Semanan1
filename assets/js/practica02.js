/** Condicionales
 * if / else
 */

let nombre = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad:");

if(edad >= 18){
    console.log(nombre +"puedes ver peliculas de violencia");
}else{
    console.log("No puedes ver peliculas violentas");
}

/**
 * condicional swith 
*/

switch (edad) {
    case "18":
        console.log(nombre +"puedes ver peliculas de violencia");  
        break;

    default:
        console.log("No puedes ver peliculas violentas");
        break;
}