// every todos los elementos de un areglo deben de cumplir esa condicion para que retorne un true

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 

// debe de cumplir con todos los condiciones  && todos deben de cumplir con la condicion
const resultado = carrito.every(producto => producto.precio < 500)
console.log(resultado);

// almenos uno ||, el primero que agarre es el que va a mostrar
const resultado2 = carrito.some(producto => producto.precio < 500)
console.log(resultado2);