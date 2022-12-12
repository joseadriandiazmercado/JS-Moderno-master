// findIndex

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
] 

// encontrar el indice de abril
meses.forEach((mes,i) => {
    if(mes === 'Abril') {
        console.log(`Mes encontrado en el indice ${i}`);
    }
})

// encontrar el indice de abril

const indice = meses.findIndex(mes => mes==='Abril');
console.log(indice);

// comprobar un valor de un arreglo de objetos

const producto  = carrito.findIndex( producto =>  {
    return producto.nombre === 'Tablet'; // yyyyyyy aqui estas interactuando con producto, no con carrito
})

console.log(producto);