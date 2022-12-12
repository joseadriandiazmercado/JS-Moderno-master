// object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

// object constructor
function Producto(nombre, precio) { // parametros que debe de recibir
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Teclado', 4500);
console.log(producto2);

function Marcas(nombre, modelo){
    this.nombre = nombre;
    this.modelo = modelo;
    this.disponible = true;
}

const marcas = new Marcas('RAZER', 4500);
console.log(marcas);