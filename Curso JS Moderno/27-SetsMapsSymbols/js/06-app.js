// Creacion de nuestro propio iterador

function crearIterador (carrito)
{
    // Se requiere un iterador
    let i = 0;

    return{
        siguiente: () => {
            // () el valor que se esta inicializando abajo es un "if"
            const fin = ( i >= carrito.lenght );
            const valor = !fin ? carrito[i++] : undefined ;
            return{
                fin,
                valor
            }
        }
    }

}

const carrito = ['Producto 1','Producto 2','Producto 3', 'New Product']

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);


  
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
