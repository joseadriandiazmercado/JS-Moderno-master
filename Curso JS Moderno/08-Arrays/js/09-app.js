const carrito = [
        {nombre: 'Monitor 27 pulgadas', precio: 500 },
        {nombre: 'Computadora', precio: 800 },
        {nombre: 'Audifonos', precio: 20 },
        {nombre: 'Cubo de rubick ', precio: 1000 },
        {nombre: 'Pulcera inteligente', precio: 400 },
        {nombre: 'Cuaderno', precio: 300 },

]



for(let i = 0; i < carrito.length; i++){ //.length es para interactuar con la longitud de carrito, sin necesidad de saber la longitud del arreglo

    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`); // meses en la pocicion de "i" 

}

console.log("--------------------------------------------------------");
 
carrito.forEach( function(producto){  // ahora vamos a interactuar con "producto"

    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})