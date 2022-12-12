// modificar un objeto para que se comporte como una constante
// que no pueda ser modificado.

// Restepar mas la logica de JS
"use strict";

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}
// Con la siguiente linea de codigo es para congelar el objeto y que no pueda ser cambiado
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "Imagen.png";


console.log(producto);
// verificar si el objeto esta congelado
console.log(Object.isFrozen(producto));