// Event Bubbling
// El evento se propaga para los demas

const cardDiv = document.querySelector('.card');

const info = document.querySelector('.info');

const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card')

})

info.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info')

})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo')

})