"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
// no se puede eliminar ni añadir nuevas propiedades al objeto actual
// pero si se pueden modificar
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "Imagen.png";
// delete producto.precio;


console.log(producto);
// verificar si el producto esta sellado.
console.log(Object.isSealed(producto));