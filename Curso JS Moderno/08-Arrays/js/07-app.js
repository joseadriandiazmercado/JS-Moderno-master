const carrito = [];

// definir un producto

const producto = {

    nombre: 'Monitor 32 pulgadas',
    precio: 500
}

const producto2 ={
    nombre: 'Celular',
    precio: 800
}

// .push agregar al final de un arreglo
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'teclado',
    precio: 900

}
carrito.push(producto3);

// .unshift para agregar al inicio del arreglo
carrito.unshift(producto3);
// console.table(carrito);

// eliminar ultimo elemento de una arreglo
// carrito.pop();
// console.table(carrito);

// eliminar del inicio del arreglo
// carrito.shift();
console.table(carrito);

// eliminar de amedias del arreglo
// colocar primero el numero de index
// y despues hasta donde quieres que pare de eliminar
carrito.splice(1,1); 

console.table(carrito);
