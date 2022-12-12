const puntaje = 1000;
const puntaje2 = '1000';

console.log(typeof puntaje);
console.log(typeof puntaje2);



if(puntaje == 1000){ //-- "!= diferente a" 
    console.log('Si es igual'); 
}

if(puntaje !== '1000'){ // esto es con un operador estricto, == si  funciona por que lo toma como entero // === no funciona por que lo toma como string
    console.log('Si es difetente');
    
}
