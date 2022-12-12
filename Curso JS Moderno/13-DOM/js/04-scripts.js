// query Selector


// query Selector retordnara maximo un elemento 
// debes de seleccionarlo como lo seleccionas en css
// con el .
const card = document.querySelector('.card');
console.log(card);


//Podemos tener selectores especificos como en CSS
//Lo que estamos seleccionando primero es .premiun que es el padre y despues .info que es el hijo
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje :nth:child(2)

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Para seleccinar id en CSS es con un signo de #
// Seleccionar el formulario (id)

const formulario = document.querySelector('#formulario');
console.log(formulario);

// seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);
