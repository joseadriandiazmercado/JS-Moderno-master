const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500 },
    {nombre: 'Computadora', precio: 800 },
    {nombre: 'Audifonos', precio: 20 },
    {nombre: 'Cubo de rubick ', precio: 1000 },
    {nombre: 'Pulcera inteligente', precio: 400 },
    {nombre: 'Cuaderno', precio: 300 },

]


const NuevoArreglo  = carrito.forEach( producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`))

const NuevoArreglo2 = carrito.map( producto => {  // .map crea un nuevo arreglo
    
    if(producto.precio < 401){
        return`${producto.nombre} - Precio: ${producto.precio}`; // recuerda que el return tambien es para mostrar
        }
    else{
            console.log('<- Producto con precio abajo de 400');
        }
})

console.log(NuevoArreglo2);
console.log("--------------------------------------------------------");
console.log(NuevoArreglo);