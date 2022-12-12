// palabra reservada "this"
// utIlizada principalmente para hacer refenrencia de donde quieres que tome esas valores tu variables

const nombre = "hola";
const precio = 20;

const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        // poner this. es que va a buscar esa propiedad dentro de este mismo objeto.
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`) 
    }
}


const producto2 = {
    nombre: 'Mouse',
    precio: 1000,
    disponible: true,
    mostrarInfo: function(){
        // poner this. es que va a buscar esa propiedad dentro de este mismo objeto.
        // hace refenrecia al objeto
        // ya lo puse peroooooo
        // hace refenrecia la objeto
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`) 
    }
}


producto.mostrarInfo();
producto2.mostrarInfo();