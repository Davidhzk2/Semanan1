/**  Actividad
 * Mostras la comida tipica y la receta segun la ciudad y departamento
 *
 */
const empezar = () => {
  let depto = prompt(
    "Selecciones un Departemento con el numero correspondiente: \n1 - Antioquia \n2 - Caldas \n3 - Guinía \n4 - Quindio \n5 - Vaupés \n \nOpciones: 1, 2, 3, 4, 5"
  );

  console.log(depto);
  let ciudad = "";
  let comidaTipica = "";
  switch (depto) {
    case "1":
      ciudad = prompt(
        "Antioquia \nSeleccione una Ciudad con el numero correspondiente: \n 1 - Medellín \n2 - Envigado  \n3 - Guatape \n4 - Uraba"
      );
      console.log(ciudad);
      switch (ciudad) {
        case "1":
            comidaTipica = prompt("Medellin! \nSeleccione una comida tipica con el numero correspondiente: \n1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "2":
            comidaTipica = prompt(" Envigado\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "3":
            comidaTipica = prompt("Guatape \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "4":
            comidaTipica = prompt("Uraba\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        default:
            alert("Ingrese un valor de 1 a 4");
            empezar();
          break;
      }
      break;
    case "2":
      ciudad = prompt(
        "Caldas\nSeleccione una Ciudad con el numero correspondiente: \n 1 - Filadelfia  \n2 - La Drorada  \n3 - Manizales \n4 - Pensilvania"
      );
      console.log(ciudad);
       switch (ciudad) {
        case "1":
            comidaTipica = prompt("Filadelfia  \nSeleccione una comida tipica con el numero correspondiente: \n1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "2":
            comidaTipica = prompt(" La Dorada\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "3":
            comidaTipica = prompt("Manizales  \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "4":
            comidaTipica = prompt("Pensilvania \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        default:
            alert("Ingrese un valor de 1 a 4");
            empezar();
          break;
      }
      break;
    case "3":
      ciudad = prompt(
        "Guainía\nSeleccione una Ciudad con el numero correspondiente: \n 1 - Inirida \n2 - Barracominas"
      );
      console.log(ciudad);
       switch (ciudad) {
        case "1":
            comidaTipica = prompt("Inirida! \nSeleccione una comida tipica con el numero correspondiente: \n1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "2":
            comidaTipica = prompt(" Barracomias \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        default:
            alert("Ingrese un valor de 1 a 2");
            empezar();
          break;
      }
      break;
    case "4":
      ciudad = prompt(
        "Quindio\nSeleccione una Ciudad con el numero correspondiente: \n 1 - Armenia \n2 - Salento   \n3 - Calarca \n4 - Finlandia"
      );
      console.log(ciudad);
        switch (ciudad) {
        case "1":
            comidaTipica = prompt("Armenia \nSeleccione una comida tipica con el numero correspondiente: \n1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "2":
            comidaTipica = prompt("Salento\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "3":
            comidaTipica = prompt("Calaraca  \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "4":
            comidaTipica = prompt("Finlanddia \nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        default:
            alert("Ingrese un valor de 1 a 4");
            empezar();
          break;
      }

      break;
    case "5":
      ciudad = prompt(
        "Vaupes\nSeleccione una Ciudad con el numero correspondiente: \n 1 - Mitú \n2 - Carurú  \n3 - Taraira"
      );
      console.log(ciudad);
      switch (ciudad) {
        case "1":
            comidaTipica = prompt("Mitú \nSeleccione una comida tipica con el numero correspondiente: \n1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "2":
            comidaTipica = prompt("Cararú\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
        case "3":
            comidaTipica = prompt("Taraira\nSeleccione una comida tipica con el numero correspondiente: \n 1 - comida1\n2 - comida2  \n3 - comida3 ");
            console.log(comidaTipica);
          break;
      
        default:
            alert("Ingrese un valor de 1 a 3");
            empezar();
          break;
      }
      break;
    default:
      alert("Ingrese un valor de 1 a 5");
      empezar();
      break;
  }
};
