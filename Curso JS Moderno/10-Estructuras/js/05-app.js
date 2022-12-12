// Switch case

const medotoPago = 'efectivo';



switch(medotoPago){

    case 'efectivo':
        pagar();
        break;
    case 'cheque':
            console.log(`Pagaste con ${medotoPago}`);
        break ;
    case 'tarjeta':
            console.log(`Pagaste con ${medotoPago}`);
        break ;
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago no soportado');
}

function pagar(){

    console.log(`Pagando.......`)
}