

const producto = '              monitor de 20"              ';

console.log(producto);
console.log(producto.length)

// ELIMINAR DEL INICIO... (espacios en blanco)

console.log(producto.trimStart());

// ELIMINAR DEL FINAL... (espacios en blanco)
console.log(producto.trimEnd());

// ELIMINAR DEL INICIO Y DEL FINAL... (espacios en blanco)
console.log(producto.trimStart().trimEnd());

// ELIMINAR DEL INICIO Y DEL FINAL... (espacios en blanco)
console.log(producto.trim());