// Detyener la ejecucion de un if con una funcion

const autenficado = true;

if(autenficado){

    console.log('El usuario esta autenficado');
}


const puntaje = 350;

function revisarPuntaje (){

    if(puntaje> 400){
        console.log(`Exelente puntaje, Obtuviste un puntaje de: ${puntaje}`);
        return;
    }

    if(puntaje> 300){
        console.log(`Buen puntaje, Obtuviste un puntaje de: ${puntaje}`);
        return;
    }
}


revisarPuntaje();