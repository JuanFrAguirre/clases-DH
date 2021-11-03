export let homero = {
    nombre: 'Homero',
    apellido: 'Simpson',
    edad: 40,
    usaLentes: false,
    hobbies: ['comer', 'cerveza', 'comer', 'ver TV', 'comer'],
    direccion: {
        calle: 'Av. Siempreviva',
        numeracion: '742',
        ciudad: 'Springfield'
    }
}

export let marge = {
    nombre: 'Marjorie',
    apellido: 'Simpson',
    edad: 36,
    usaLentes: false,
    direccion: {
        calle: 'Av. Siempreviva',
        numeracion: '742',
        ciudad: 'Springfield'
    },
    conyuge: homero
}

console.log(marge)