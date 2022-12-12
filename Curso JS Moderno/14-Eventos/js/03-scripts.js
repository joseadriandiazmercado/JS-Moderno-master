// Eventos que pasa en un teclado

const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', () =>{ 

//     console.log('escribiendo....')

// });

busqueda.addEventListener('input', (e) =>{ 
    if(e.target.value === ''){
        console.log('fallo la validacion');

    }
    

});
console.log(busqueda);


// blur es perfecto para validaciones