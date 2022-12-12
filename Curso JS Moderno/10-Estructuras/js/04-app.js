// operador con 3 condiciones if else

const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;
const cheque = true;

if(dinero >= totalAPagar){
    console.log('Pago Aceptado');
}    
else if(cheque){
    console.log('Si tengo un cheque');
}
else if(tarjeta){ // ya no se ejecuta esta condicion dado que la de arriba si se cumple
    console.log('Si puedo pagar por que tengo la terjeta');
    }
else{
    console.log('Pago Rechazado');
}
