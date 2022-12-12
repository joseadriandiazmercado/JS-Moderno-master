const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// El objeto como tal no se puede cambiar.
// pero los atributos que estan dentro si.

producto.disponible = false;
console.log(producto);