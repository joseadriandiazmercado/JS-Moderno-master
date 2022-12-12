// Traversing the DOM
// Es ir recorriendo el camino sobre los diferentes nodes 
// O los difentes elementos de tu HTML  
// Hasta poder modificar el que tu quieres

const navegacion = document.querySelector('nav');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); // Los espacios en blanco se conviernen en elementos

// console.log(navegacion.children); //Mostrara elementos que si son reales (codigo HTML);

// console.log(navegacion.children[2].nodeName);
// console.log(navegacion.children[2].nodeType);

// const card = document.querySelector('.card');
// console.log(card.children[1].children[1].textContent)

// Cambiar un texo con Traversing the DOM
// card.children[1].children[1].textContent = 'MUSICA BANDA';
// console.log(card.children[1].children[1].textContent);



// card.children[0].src = 'img/hacer2.jpg'
// console.log(card.children[0]);


// Traversing the Hijo al Padre
// console.log(card.parentNode.parentNode);
// console.log(card.parentElement.parentElement.parentElement); // El resultado es el mismo pero es de una forma mas segura

// para navergar al hermano del primer card
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');
// console.log(ultimoCard.previousElementSibling);


// const card_abajo = document.querySelector('.contenedor-cards');

// console.log(card_abajo.children[3].children[1].children[1]);

// card_abajo.children[3].children[1].children[1].textContent = 'PASEATE EN ESTA';
// console.log(card_abajo.children[3].children[1].children[1]);