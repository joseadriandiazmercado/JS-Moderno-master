const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 


// Sin modificar el arrelgo actual
const meses2 =  [...meses, 'Agosto'];
console.log(meses2);

const producto = {nombre:`Lavadora`, precio: 400};

const carrito2 = [...carrito,producto]; // no poner 3 puntos por no es iterable

console.log(carrito2);