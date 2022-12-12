// agregar algo al arreglo de forma declarativa

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

const producto3 = {
    nombre: 'teclado',
    precio: 900

}

// primero declaramos la variable de donde vamos a guardar lo copiado
let resultado;

// agregar algo al arreglo de forma declarativa
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);
console.table(carrito);