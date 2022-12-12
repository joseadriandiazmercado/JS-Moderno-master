
const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript']; 

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500 },
    {nombre: 'Computadora', precio: 800 },
    {nombre: 'Audifonos', precio: 20 },
    {nombre: 'Cubo de rubick ', precio: 1000 },
    {nombre: 'Pulcera inteligente', precio: 400 },
    {nombre: 'Cuaderno', precio: 300 },
]

// pendiente es el alias de cada iteracion con el arreglo pendientes
for( let pendiente of pendientes ){
    console.log(pendiente);
}


// produto  es el alias de cada iteracion con el arreglo carrito
for(let producto of carrito ){

    console.log(producto.nombre);

}