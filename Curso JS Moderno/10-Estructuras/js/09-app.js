// operador ternario


const autenticado = true;
const puedePagar = false;

// se puede enternder if = ? y : es igual a else
console.log(autenticado && puedePagar ? `Si puede pagar`: `No esta auntentificado`);

// ternario anidado
console.log(autenticado ? puedePagar ? `si esta autenficado y si puede pagar` :`si autentificado, no puede pagar`: `no no esta autenficado` );