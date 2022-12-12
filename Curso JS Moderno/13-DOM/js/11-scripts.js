// eventos
// addEventListener es un posible evento


const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// addEventListener es un posible evento, si alguien le da click, entonces interactua, () quiere decir que es una funcion anonima
// console.log(`Diste click`) Lo que ya esta adentro de la funcion es lo que pasa cuando alguien le da click al boton
btnFlotante.addEventListener('click', mostrarOcultarFooter);


function mostrarOcultarFooter(){
        if(footer.classList.contains('activo')){
            footer.classList.remove('activo');
            this.classList.remove('activo');
            this.textContent = 'Idioma y Moneda';
        }
        else{
            footer.classList.add('activo');
            this.classList.add('activo');
            this.textContent = 'X Cerrar';
        }

        

}

