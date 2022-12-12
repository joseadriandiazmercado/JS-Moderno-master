const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}


// agregar nuevas propiedas al objeto
producto.imagen = "imagen.jpg";
// eliminar una propiedad de un objeto
delete producto.disponible;

console.log(producto);
