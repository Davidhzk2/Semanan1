let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let casilla = document.getElementById("casilla");
let historial = document.getElementById("historial");
let mensajes = document.getElementById("mensajes");

// variables
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

// Variables temporales
let num1Temp = "";
let num2Temp = "";
let op = "";
let history = "";

// Operaciones
let btnSuma = document.getElementById("btnSuma");
let btnResta = document.getElementById("btnResta");
let btnMulti = document.getElementById("btnMulti");
let btnDivi = document.getElementById("btnDivi");
let btnIgual = document.getElementById("btnIgual");
let btnClearl = document.getElementById("btnClearl");
let btnCE = document.getElementById("btnCE");
let btnPunto = document.getElementById("btnPunto");

// Funciones
const btn1f = () => {
  if (op === "") {
    num1Temp += "1";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "1";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn2f = () => {
  if (op === "") {
    num1Temp += "2";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "2";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};

const btn3f = () => {
  if (op === "") {
    num1Temp += "3";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "3";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn4f = () => {
  if (op === "") {
    num1Temp += "4";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "4";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn5f = () => {
  if (op === "") {
    num1Temp += "5";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "5";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn6f = () => {
  if (op === "") {
    num1Temp += "6";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "6";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn7f = () => {
  if (op === "") {
    num1Temp += "7";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "7";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn8f = () => {
  if (op === "") {
    num1Temp += "8";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "8";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn9f = () => {
  if (op === "") {
    num1Temp += "9";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "9";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};
const btn0f = () => {
  if (op === "") {
    num1Temp += "0";
    casilla.innerHTML = num1Temp;
  } else {
    if (num1Temp !== "") {
      num2Temp += "0";
      casilla.innerHTML = num2Temp;
    } else {
    }
  }
};

const btnIgualf = () => {
  if (num2Temp === "") {
      mensajes.innerHTML = "No hay numero 2";
      limpiarMensaje();
  } else {
    let numero1 = parseFloat(num1Temp);
    let numero2 = parseFloat(num2Temp);
    let resultado = 0;

    switch (op) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 + -numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        if (numero2 === 0) {
          return (mensajes.innerHTML = "No se puede divir por cero.");
        } else {
          resultado = numero1 / numero2;
        }
        break;
    }
    console.log(resultado);
    // alert("El resultado es : " + resultado);
    casilla.innerHTML = resultado;
    historial.innerHTML = resultado;
  }
};
const btnSumaf = () => {
  limpiarMensaje();
  if (num1Temp === "") {
    mensajes.innerHTML = "Por favor digite un primer numero";
    limpiarMensaje();
  } else {
    casilla.innerHTML = "";
    op = "+";
    history = num1Temp + "+";
    historial.innerHTML = history;
  }
};

const btnRestaf = () => {
  if (num1Temp === "") {
    mensajes.innerHTML = "Por favor digite un primer numero";
    limpiarMensaje();
  } else {
    op = "-";
  }
};

const btnMultif = () => {
  if (num1Temp === "") {
    mensajes.innerHTML = "Por favor digite un primer numero";
    limpiarMensaje();
  } else {
    op = "*";
  }
};
const btnDivif = () => {
  if (num1Temp === "") {
    mensajes.innerHTML = "Por favor digite un primer numero";
    limpiarMensaje();
  } else {
    op = "/";
  }
};

const limpiarMensaje = () => {
  setTimeout(() => {
    mensajes.innerHTML = "";
  }, 1500);
};

const clearf = () => {
  historial.innerHTML = "";
  casilla.innerHTML = "";
  history = "";
  num1Temp = "";
  num2Temp = "";
  op = "";
};

const btnCEf = () =>{
    if(num1Temp === ""){
        mensajes.innerHTML = "No hay nada por borrar";
        limpiarMensaje();
    }else{
        if (op === "") {
            num1Temp = num1Temp.substring(0, num1Temp.length -1);
            casilla.innerHTML = num1Temp;
        } else {
             num2Temp = num2Temp.substring(0, num2Temp.length -1);
            casilla.innerHTML = num2Temp;
        }
    }
};

const puntof = () => {
  if (num1Temp.includes(".") && op === "") {
    mensajes.innerHTML = "Ya existe un punto de operador 1.";
    limpiarMensaje();
  } else {
    if (op === "" && num1Temp === "") {
      num1Temp += "0.";
      casilla.innerHTML = num1Temp;
    } else {
      if (op === "") {
        num1Temp += ".";
        casilla.innerHTML = num1Temp;
      } else {
        if (num2Temp.includes(".") && op !== "") {
          mensajes.innerHTML = "Ya existe un punto de operador 2.";
          limpiarMensaje();
        } else {
          if (num2Temp === "") {
            num2Temp += "0.";
            casilla.innerHTML = num2Temp;
          } else {
            num2Temp += ".";
            casilla.innerHTML = num2Temp;
          }
        }
      }
    }
  }
};
// Onclick
btn1.onclick = () => {
  btn1f();
};
btn2.onclick = () => {
  btn2f();
};
btn3.onclick = () => {
  btn3f();
};
btn4.onclick = () => {
  btn4f();
};
btn5.onclick = () => {
  btn5f();
};
btn6.onclick = () => {
  btn6f();
};
btn7.onclick = () => {
  btn7f();
};
btn8.onclick = () => {
  btn8f();
};
btn9.onclick = () => {
  btn9f();
};
btn0.onclick = () => {
  btn0f();
};
btnSuma.onclick = () => {
  btnSumaf();
};
btnResta.onclick = () => {
  btnRestaf();
};
btnMulti.onclick = () => {
  btnMultif();
};
btnDivi.onclick = () => {
  btnDivif();
};
btnIgual.onclick = () => {
  btnIgualf();
};

btnClearl.onclick = () => {
  clearf();
};
btnCE.onclick = () => {
  btnCEf();
};
btnPunto.onclick = () => {
  puntof();
};
