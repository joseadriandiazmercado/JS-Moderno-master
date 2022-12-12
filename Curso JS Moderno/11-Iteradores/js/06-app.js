// forEach, mejor metodo para recorrer un arreglo
// .map


const pendientes = ['Tarea','Comer','Proyecto','Estudiar JavaScript']; 
    
pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice}: ${pendiente}`);

}
)

const carrito = [
    {nombre: 'Monitor 27 pulgadas', precio: 500 },
    {nombre: 'Computadora', precio: 800 },
    {nombre: 'Audifonos', precio: 20 },
    {nombre: 'Cubo de rubick ', precio: 1000 },
    {nombre: 'Pulcera inteligente', precio: 400 },
    {nombre: 'Cuaderno', precio: 300 },
]

carrito.forEach( (producto, precio) => {
    console.log(`${producto.nombre}- ${producto.precio}`);
})

const nuevoArreglo = carrito.forEach( (producto, precio)=>{console.log(`${producto.nombre}- ${producto.precio}`)})

// el .map crea un nuevo arreglo desde 0 y lo va llevando por cada iterecion
const nuevoArreglo2 = carrito.map( (producto, precio)=>{console.log(`${producto.nombre}- ${producto.precio}`)}) 

console.log(nuevoArreglo);
console.log(nuevoArreglo2);