// JSON
console.clear();

// utilizar fs para leer archivos (necesario para leer nuestros JSON)

// ----------------------
let data2 = [
  {
    nombre: "Juan",
    apellido: "Aguirre",
    saludar: () => {
      return "hola";
    },
  },
  {
    nombre: "Jose",
    apellido: "Lopez",
  },
  {
    nombre: "Mario",
    apellido: "Caliguy",
  },
  {
    nombre: "Paco",
    apellido: "Gomez",
  },
];

// console.log(data);
// console.log(JSON.stringify(data));

const fs = require("fs");

let jsonData = fs.readFileSync("./json.json", "utf-8");

let data = JSON.parse(jsonData).data;

for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
  console.log("----");
}
