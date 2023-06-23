// Symbols
// Symbols -> Permiten crear una propiedad unica
// Symbols -> no son iguales nunca




const symbols = Symbol();
const symbols2 = Symbol();

if(symbols === symbols2){

    console.log('son iguales')

}else{

    console.log('son diferentes')
}

console.log(`---------------------------------------`);


const nombre = Symbol()
const apellido = Symbol()

const persona = {};

// Agregar nombre y apellido como llaves del objeto
persona[nombre] = 'Adrian';
persona[apellido] = 'Diaz';

// Agregar tipoCliente y saldo como llaves y sus respectivos valores de forma tradicional
persona.tipoCliente = 'VIP';
persona.saldo = 500;


// Ver la llave de cliente que esta almacenada en un symbol
console.log(persona[nombre])

// Propiedades definidas por symbol no son  iterables
for(let i in persona){
    console.log(i)
}

// Definir  una descripcion del symbol
const nombreCliente = Symbol('Nombre del cliente')
const cliente = {};

cliente[nombreCliente] = 'MIE_RDA' //Si estas leyendo esto, tu sabes que estaba aqui......

console.log(cliente)
console.log(cliente[nombreCliente])
console.log(nombreCliente)