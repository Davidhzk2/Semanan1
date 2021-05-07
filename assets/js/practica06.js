// Mini Calculadora

const miniCalculadora = () => {
  //opciones de menu

  let op = prompt(
    "Escriba  la opcion Correspondiente a la opearación: \n A - Suma \n B - Resta \n C - Multiplica \n D - Dividir"
  );

  op = op.toLowerCase();
  console.log(op);

//   if()

  if ((op != "a" && op != "b") || op != "c" || op != "d") {
    alert("Debe ser una opcion entre A y D");
  } else {
    op = op.toLowerCase();
    let num1 = parseFloat(prompt("Ingresa el numero 1:"));
    let num2 = parseFloat(prompt("Ingresa el numero 2:"));

    let resultado = 0;
    // if que no tiene else
    if(op == "a") resultado = num1 + num2;
    if(op == "b") resultado = num1 - num2;
    if(op == "c") resultado = num1 * num2;
    if(op == "d"){
        if (num2 == 0) {
             return alert("No se puede dividir por cero");
        } else {
            resultado = num1 / num2;
        }

    }
    alert("El resultado es:"+ resultado);
  }
};

// switch (op) {
//   case "a":
//     op = op.toLowerCase();
//   case "b":
//     op = op.toLowerCase();
//   case "c":
//     op = op.toLowerCase();
//   case "d":
//     op = op.toLowerCase();
//   default:
//     console.log("2: Debe ser una opcion entre A y D");
//     break;
// }
