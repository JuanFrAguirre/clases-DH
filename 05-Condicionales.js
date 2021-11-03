// Condicionales
console.clear();

// if --> switch

// let nombre = "Juan";

let saludar = (nombre) => {
  // if (nombre === 'Juan') return `Hola, ${nombre}`
  // if (nombre === 'Sol') return `${nombre} querida, como estas?`
  // if (nombre === 'Tomas') return `Que onda, ${nombre}?`
  let saludo;

  switch (nombre) {
    case "Juan":
      saludo = `Hola, ${nombre}`;
      break;
    case "Sol":
      saludo = `${nombre} querida, como estas?`;
      break;
    case "Tomas":
      saludo = `Que onda, ${nombre}?`;
      break;
    default:
      saludo = "No te conozco";
      break;
  }

  return saludo;
};

// ternario

// nullish coalescing vs OR vs AND

// let var1;
// let var2 = "Juan";

// console.log(var1 || var2);

// booleans
// true false

// truthy
//      string
//      numeros distintos de 0
//      objeto literal (indistintamente de si estan vacios o no)
//      array (indistintamente de si estan vacios o no)

// falsy
//      string vacio
//      numero 0
//      null
//      undefined
//      NaN

let persona = {
  nombre: "Juan",
  apellido: "Aguirre",
  edad: 26,
  pertenencias: ["reloj", "campera"],
  //   pertenencias: [],
};

let explicar = () => {
  if (persona.pertenencias) return "funciono";
  else return "no funciono";
};

console.log(explicar());
