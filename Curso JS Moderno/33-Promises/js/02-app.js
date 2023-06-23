//calbackHell
const paises = [];


//-> callback es la funcion que se agregara y ejecutara despues dentro como parametro de otra funcion
const nuevoPais = (pais, callback) => {
    paises.push(pais);
    console.log(`AGREGADO: ${pais}`)
    callback()
}

const mostrarPaises = () => {
    console.log(paises);
}

const iniciarCallbackHell = () =>{
        setTimeout(() => {
            nuevoPais('Alemania', mostrarPaises)
                setTimeout(() => {
                nuevoPais('Argentina', mostrarPaises)
            }, 2000);
        }, 2000);
}


iniciarCallbackHell();