//!Detectar si el usuario esta en la pagina actual      

document.addEventListener('visibilitychange', () =>{

    if(document.visibilityState === 'visible'){
        console.log('Ejecutar la funcion para reproducir el video....')
    }else{
        console.log('El usuario se ha ido de la página...')
    }
})