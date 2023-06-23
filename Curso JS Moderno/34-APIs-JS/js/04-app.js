const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const cerrarBtn = document.querySelector('#salir-pantalla-completa');


const pantallaCompleta = () =>{
    //colocarlo el DOM en pantalla completa
    
    document.documentElement.requestFullscreen()
}

const cerrarPantallaCompleta = () =>{
    //Salir de la pantalla completa
    document.exitFullscreen()
}


abrirBtn.addEventListener('click', pantallaCompleta)
cerrarBtn.addEventListener('click', cerrarPantallaCompleta)

