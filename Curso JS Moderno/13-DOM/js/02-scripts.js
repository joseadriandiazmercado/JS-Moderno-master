// seleccionar elementos por su clase

// getElementsByClassName seleccionar elementos que tengan nombre de una clase
const hearder = document.getElementsByClassName('header contenedor');

console.log(hearder);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases exiten mas de 1 vez

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

// Si una clase no exite retornara un arreglo
const noExiste = document.getElementsByClassName('no-Existe');
console.log(noExiste);