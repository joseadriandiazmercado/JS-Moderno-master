// For- loop

// imprimir en la consola del 0 al 20
// for(let i = 0; i<= 20; i++){
//         console.log(`Numero: ${i}`);
// }

// sacar los numeros pares, en todos los lenguajes que he trabajado es con %

// for(let i = 0; i <= 50; i++){
//     if(i % 2 === 0){
//         console.log(`Numero ${i} ES PAR`);
//     }
//     else {
//         console.log(`Numero ${i} ES IMPAR`);
//     }
// }

// Estas son las compras del usuario
    const carrito = [
        {nombre: 'Monitor 27 pulgadas', precio: 500 },
        {nombre: 'Computadora', precio: 800 },
        {nombre: 'Audifonos', precio: 20 },
        {nombre: 'Cubo de rubick ', precio: 1000 },
        {nombre: 'Pulcera inteligente', precio: 400 },
        {nombre: 'Cuaderno', precio: 300 },
]

 console.log(carrito.length);

 console.log(`Tus productos son:`);
 for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - ${carrito[i].precio} `);
 }