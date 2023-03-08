//Generador.
// Generador -> un generador es uina funcion que retorna un iterador  
//Tiene la misma sintaxis de una funcion, pero antes del nombre se coloca un *
//Un generador inicia como suspended, despierta con un next() 


function *crearGenerador (){

  yield 1;
  yield 'Adrian'
  yield 3*3
  yield true
}

// const iterador = crearGenerador();


// console.log(iterador);

// console.log(iterador.next()) //<- sirve para despertar el generador

// console.log(iterador.next().value) // <- sirve para obtener el valor de yielId
// console.log(iterador.next().done) // <- retorna true o false, dependiendo si el generador ya termino(Termina cuando ya recorre todos sus valores)
 
// console.log(iterador.next())
// console.log(iterador);
// console.log(iterador.next())

// console.log(`Cuando el Generador termina, cambia de valor a:`)
// console.log(iterador);



//Generador para carrito de compras
function *generadorCarrito(carrito) {
    for(let i=0; i< carrito.length; i++){

        yield carrito[i];

    }
}

const carrito = ['Producto 1','Producto 2', 'Producto 3']

const iteradorTwo = generadorCarrito(carrito)

console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
console.log(iteradorTwo.next());
