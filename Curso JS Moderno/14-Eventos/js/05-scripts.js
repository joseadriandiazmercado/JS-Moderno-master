//Eventos con el scroll

window.addEventListener('scroll', () => {

       


    const premiun = document.querySelector('.premium');
    const ubicacion = premiun.getBoundingClientRect();
    
    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible');
    }else{
        console.log('Aun no, da mas scroll');
    }


})  