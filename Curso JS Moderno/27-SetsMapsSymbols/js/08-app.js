//Iterador entry
//Iterador entry -> nuevo iterador que siempre retorna llave y valor (incluso cuando este no lo tenga)
//Los Set son solamente valor, no requieren llaves



const cuidades = ['Londres','New York', 'Madrid', 'Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('Nombre','Adrian');
datos.set('Profesion', 'Programador') //-> escrito el 28 de Marzo del 2023

//Default
for(let cuidad of cuidades){
    console.log(cuidad)
}


//Entries Iterator
//Retorna tanto llave yvalor
for(let entry of cuidades.entries()){
    console.log(entry)
}

for(let entry of ordenes.entries()){
    console.log(entry)
}

for(let entry of datos.entries()){
    console.log(entry)
}


//Value iterator
//Iterador que solamente retorna valores de los arreglos

for(let value of datos.values()){
    console.log(value)
}


//Keys iterator
//Retorna solamente las llaves de los arreglos
for(let keys of datos.keys()){
    console.log(keys)
}