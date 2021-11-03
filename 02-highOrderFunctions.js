// High Order Functions
console.clear()

let numeros = [100, 2, 4, 8, 10, 35]

// map
let numerosMapeados = numeros.map((x) => x)
let numerosMapeados2 = [...numeros]

let numerosMapeados3 = numeros

// console.log('mapeados1', numeros)
// console.log('mapeados2', numerosMapeados)
// console.log('mapeados3', numerosMapeados2)
// console.log('mapeados4', numerosMapeados3)

// filter

// reduce

let numerosReducidos = numeros.reduce((a, b) => (a -= b))

console.log(numerosReducidos)

// forEach
