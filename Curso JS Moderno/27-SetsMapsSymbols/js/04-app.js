// WeakMap 
// WeakMap -> No se pueden iterar 



const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

//Agregar al WeakMap
weakMap.set(producto, 'Monitor')


//Verificar si se encuentra ese arreglo
console.log(weakMap.has(producto))

//No se pueden acceder a sus valores son .get
console.log(weakMap.get(producto))

console.log(weakMap)


//Elimianr un dato del WeakMap
weakMap.delete(producto)

console.log(weakMap)


