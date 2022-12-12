const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit',validarFormulario);

function validarFormulario(e){
    e.preventDefault(); // evita lo que el navegador tiene que hacer normalmente

console.log('buscando....')
    
console.log(e.target.action)
}




