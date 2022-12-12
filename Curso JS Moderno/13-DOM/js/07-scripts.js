// const encabezado = document.querySelector('.contenedor h1');

// encabezado.style.backgroundColor = 'red' ;
// encabezado.style.fontFamily = 'Arial'
// encabezado.style.textTransform = 'uppercase';

// Añadir una nueva clase
const card = document.querySelector('.card');
card.classList.add('nueva-clase','segunda-clase');
card.classList.remove('segunda-clase');
console.log(card.classList);