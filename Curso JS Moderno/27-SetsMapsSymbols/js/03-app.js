// Map -> son listas ordenadas en "llave" y "valor"
// Map -> Acepta cualquier tipo de dato
// Map -> Especialmente diseñados para agregar o quitar elementos o para recorrerlos
// Map -> Su sintaxis es parecida a Set
// Map -> Son iterables

 
const usuario = new Map();


usuario.set('nombre', 'adrian')
usuario.set('tipo', 'VIP')
usuario.set('Saldo', 3000)


// Obtener el valor de un set 
console.log(usuario.get('Saldo'))

// Obtener el tamaño del Map
console.log(usuario.size);

// Verificar un valor del Map
console.log(usuario.has('nombre'))


// Eliminar un elemento del Map
usuario.delete('tipo')


// console.log(usuario)


// Pasar parametros de inicio a un Map
// Se requiere que cuando se inicializa con parametros colocarlos -> [[]]

const paciente =  new Map([['nombre', 'paciente'], ['cuarto', 'no-definido']])

// agregar un dato mas al Map
paciente.set('dr', 'Dr Asignado');


// reescribir un valor con la misma llave
paciente.set('nombre', 'Carlos');


console.log(paciente)


paciente.forEach(e => {
    console.log(e)
    
})