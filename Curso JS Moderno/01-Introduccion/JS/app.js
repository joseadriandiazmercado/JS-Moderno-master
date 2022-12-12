 //mostrar un input al inicio de la pagina
const nombre = prompt('cual es tu nombre?');

document.querySelector('.contenido').innerHTML  // document.querySelector es para hacer peticiones al documento de html, innerHTML es para remplasarlo 
= `${nombre} esta aprendiento JS moderno`;     //${variable} y mensaje restante
console.log('hola');
console.log('adrian');

function decir_hola(){
    console.log('hola');
}

console.log(decir_hola);
