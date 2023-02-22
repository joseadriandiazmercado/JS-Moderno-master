// Set -> Le puedes pasar cualquier valor
// Set -> permite crear una lista de valores sin replicados 
// Set -> solamente puede almacenar valores 
// Set -> no permite valores repetidos
// Set -> son iterables

const carrito = new Set();

carrito.add('camisa')
carrito.add('Disco #1')
carrito.add('Disco #2')
carrito.add('Disco #3')
carrito.add('camisa')


//Eliminar valor de carrito
carrito.delete('Disco #2')
 
//Verificar si lo tiene
console.log(carrito.has('Disco #3'))

//.lenght
console.log(carrito.size)

//Eliminar por completo el Set
// carrito.clear();

//Iterar sobre el carrito
carrito.forEach((e, index) => {
    console.log(e);
    // console.log(index);
})

console.log(carrito);

// Del siguiente arreglo, eliminar los duplicados

const numeros = [10,20,30,40,50,10,20];

//No permite valores repetidos
const noDuplicados = new Set(numeros);

console.log(noDuplicados);