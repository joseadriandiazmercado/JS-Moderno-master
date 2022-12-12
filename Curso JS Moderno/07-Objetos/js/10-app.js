const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: "1m"
}

console.log(producto);
console.log(medidas);

// vamos a unir los dos objetos
const union = Object.assign(producto, medidas);

// segunda manera de unir los objetos
// Spread Operator o Rest Operatos
// los ... Puntos es para que COPIE y despues poner el nombbre del objeto
// todo esto entre corchetes y decir que lo que se va a copiar es un objeto.
const union2 = {...producto, ...medidas};



console.log(union);
console.log(union2);