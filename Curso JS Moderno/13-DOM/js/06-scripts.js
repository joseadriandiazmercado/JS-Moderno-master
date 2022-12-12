// Modificar texto e imagenes

const header = document.querySelector('.contenedor h1').textContent;
console.log(header);

// console.log(header.innerText); // si en el CSS- visibility: hidden; no lo va a encontrar
// console.log(header.textContent); // este si lo va encontrar
// console.log( header.innerHTML); // se trae el html

// document.querySelector('.contenedor h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card  img');
imagen.src = 'img/hacer2.jpg';

