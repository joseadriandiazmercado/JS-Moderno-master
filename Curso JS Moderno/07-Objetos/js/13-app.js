// object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// esto muestra la informacion cargada a la izquiera
console.log(Object.keys(producto)); 

// esto muestra la informacion cargada a la derecha (valores)
console.log(Object.values(producto));

// esto muestra todo
console.log(Object.entries(producto));