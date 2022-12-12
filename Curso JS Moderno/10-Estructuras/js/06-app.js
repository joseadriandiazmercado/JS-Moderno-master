// operador && "Y"

const usuario = false;
const puedePagar = false;

if( usuario && puedePagar ){

    console.log(`puedes realizar el pago`);
}
else if(!usuario && !puedePagar){
    console.log(`no puedes realizar le pago`);
}

else if(!usuario){
console.log(`Debes de logearte primero`);
}
else if(!puedePagar){

    console.log(`Fondos insuficientes`)

}
