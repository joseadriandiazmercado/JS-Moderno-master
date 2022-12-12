// agregar algo al arreglo de forma imperactiva
// modifica el elemen to actual

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

// .unshift para agregar al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);