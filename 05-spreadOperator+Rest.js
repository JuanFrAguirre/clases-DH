// Spread Operator

// Rest Operator
let numeros = [100, 2, 4, 8, 10, 35]

// let numerosReducidos = numeros.reduce((a, b) => (a -= b))

let devolverValorReducido = (...numeros) => numeros.reduce((a, b) => (a += b))

console.log(devolverValorReducido(...numeros))
