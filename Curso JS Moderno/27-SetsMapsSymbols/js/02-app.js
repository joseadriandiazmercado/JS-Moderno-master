// WeakSet
// WeakSet -> solamente permite arreglos y objetos
// WeakSet -> No permite ningun valor repetido
// WeakSet -> No son iterables



const weakSet = new WeakSet();

const cliente = {
    nombre: 'Adrian',
    saldo:100
}

const tienda = {
mouse: 200,
monitos: 500
}

const cubos = {
    "3x3": 200,
    "4x4": 500
}

weakSet.add(tienda)
weakSet.add(cubos)
weakSet.add(cliente)


// Verificar si el WeakSet contiene un arreglo o/y objeto
console.log(weakSet.has(cliente))

// Elimiar un objeto del WeakSet
weakSet.delete(cubos)


console.log(weakSet)