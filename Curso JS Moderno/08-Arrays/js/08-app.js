const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}




// ------Destructuring------
// crea la variable
// permite extrar la parte del objeto con todo y el valor y crea la variable de un solo movimiento.
const {nombre} = producto; // aqui ya me esta creando la variable.

console.log(nombre);


// ------Destructuring con Arreglos

const numeros = [10,20,30,40,50]; 

const [Diez, ,treinta] = numeros;

const [Diaz, ...resto] = numeros; // ...resto es para almacenar el resto de los numeros

console.log(resto);

