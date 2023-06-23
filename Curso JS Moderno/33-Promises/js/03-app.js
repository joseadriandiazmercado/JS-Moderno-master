//?resolve -> significa que la promise se cumplio correctamente
//?reject -> significa que hubo un error en algun momento o no se puedo completa

const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = false;

    if(descuento){
        resolve('Descuento aplicado')
    }else{
        reject('No se pudo aplicar el descuento')
    }
})

//Promises requieren de .then() para arrancar
//catch -> no se cumplio el promise 
//aplica descuento, 'entonces' muestra el resultado del promise.
aplicarDescuento.then( result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})


//3 valores posibles 
// fulfilled -> el promise se cumplio
// rejected -> el promise no se cumplio
// pending -> el promise aun no sabe que regresar, esta pendiente.