// .reduce

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 


// con un forEach

let total = 0;

carrito.forEach(producto => total += producto.precio); // mas igual, para ir sumando con el mismo alias, para mantener el valor previo
console.log(total);


// con un reduce
 let resultado = carrito.reduce( (total,producto)=> total + producto.precio ,0); // el cero debe de poner como valor inicial de "total"
 console.log(resultado);