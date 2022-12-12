// Generar HTML con DOM
// crear un nuevo enlace

const encale = document.createElement('a');


// agregando el texto
encale.textContent = 'Compras';

// Añadiendo href
encale.href = '#';

// agregando target
encale.target = "_blank"

// agregar  una  funcion para cuando el cliente de click en 'a'
encale.onclick = miFuncion;

// console.log(encale);

// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//colocarlo al final de la navegacion
// navegacion.appendChild(encale);

navegacion.insertBefore(encale, navegacion.children[1]); // pasar el node de referencia

function miFuncion(){

    alert(`Diste click`);
}

// crear un CARD de forma dinamica

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.classList.add('precio');
parrafo3.textContent = '$15000 por persona.'

// Crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// crear la imagen

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

// Crear el card
const card = document.createElement('div');
card.classList.add('card');

//Asignar la imagen
card.appendChild(imagen);

//Asignar info
card.appendChild(info);

// Insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
// contenedor.appendChild(card);

contenedor.insertBefore(card, contenedor.children[0]);