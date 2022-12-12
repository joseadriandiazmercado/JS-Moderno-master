// localStorage

//  localStorage.setItem() para agregar cosas al localstorage
// llave y valor 'nombre', 'Adrian'
localStorage.setItem('nombre', 'Adrian');


const producto = {

    nombre: 'Monitor 24 pulgadas',
    precio: 300,
}

// JSON.stringify vuelve  string producto porque locarstorage no puede regresar valores que no sean string
const productoString = JSON.stringify(producto);

// manera de guardar un objeto en localstorage
localStorage.setItem('producto',productoString)



const meses = ['Enero', 'Febrero', 'Marzo']
const Meses = JSON.stringify(meses);

localStorage.setItem('Meses',Meses);