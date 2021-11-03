// Funciones
console.clear();

// console.log("Hola, mi nombre es Juan!");
// console.log("Hola, Juan, yo soy Francisco");
// console.log("Un gusto!");
// console.log("");
// console.log("");
// console.log("");

// declaradas y expresadas

function saludar() {
  console.log("hola");
}

function saludarNombre(nombre, apellido) {
  return nombre + apellido;
}

// clasicas vs arrow functions (ES6+)

let saludarArrow = () => console.log("hola");

let saludarNombreArrow = (nombre, apellido) => nombre + apellido;
