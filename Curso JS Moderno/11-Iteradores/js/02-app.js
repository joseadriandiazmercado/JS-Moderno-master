// break rompe com el programa., continue no rompe por completo el programa si no que localiza lo que quieres y regresa al inico del programa


// for(let i = 0; i<= 10; i++){
//         if(i == 5){
//             console.log(`CINCO`);
//             continue;
//         }

//         console.log(`Numero: ${i}`);
// }

// console.log(`-------------------------------------------------`)

// for(let i = 0; i<= 10; i++){
//     if(i == 5){
//         console.log(`CINCO`);
//         break;
//     }
//     console.log(`Numero: ${i}`);
// }
 
 
const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500 },
    {nombre: 'Computadora', precio: 800 },
    {nombre: 'Audifonos', precio: 20, descueto: true},
    {nombre: 'Cubo de rubick ', precio: 1000 },
    {nombre: 'Pulcera inteligente', precio: 400, descueto: true },
    {nombre: 'Cuaderno', precio: 300 },
]

const{descueto} = carrito;

// recuerda que falta poner la [i], que es la pocicion donde esta trabajando el for loop

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descueto){
        console.log(`${carrito[i].nombre} - ${carrito[i].precio}: tiene un descuento`);
        continue; // para que no liste este producto otra vez
    }else{
        console.log(`${carrito[i].nombre} - ${carrito[i].precio} `);
    }
    
}