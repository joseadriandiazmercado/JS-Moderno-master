
const producto = 'monitor de 20';

console.log(producto);

//longitud de la palabra
console.log(producto.length) 

// Ver si puede encontrar una palabra 
console.log(producto.indexOf('m'));  // -1 no la encontro

// verificar si producto tiene la palabra monitor
// respeta tanto como mayusculas y minisculas 
// si comienza en este caso con Monitor 
// arrojara false
console.log(producto.includes('monitor'));