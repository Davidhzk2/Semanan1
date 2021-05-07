/** Ejecicio 9
 * Día de la semana 
 * programacion defensiva 
 */
let dia = prompt("Ingrse día de la semana");

if (dia == null) {
    console.log("ingrese un día de la semana valido");
} else {
    // console.log("dato  valido");
    dia = dia.toLowerCase();
    if (dia == "sabado" || dia == "domingo") {
        console.log("Es fin de semana"); 
    } else {
        if (dia == "lunes" || dia =="martes" || dia == "miercoles"|| dia == "jueves" || dia == "viernes") {
        console.log("día entre semana"); 
            
        } else {    
            console.log("Por favor ingrese un día de semana valido "); 
        }
        
    }
    
}


switch (dia) {
    case null:
        console.log("Por favor ingrese un día de semana valido "); 
        break;
    case "sabado" || "domingo" :
        console.log("Es fin de semana"); 
        break;
    default:
        console.log("Por favor ingrese un día de semana valido "); 
        break;
}

// console.log("día entre semana"); 