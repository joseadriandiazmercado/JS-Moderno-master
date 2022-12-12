const producto = 'monitor de 20 pulgadas';

console.log(producto);

// remplazar lo que yo quiere con la palabra de reservada replace 
console.log(producto.replace('pulgadas' , '"'));
// se puede remplazar lo que  tu quieras.
console.log(producto.replace('monitor' , 'monitor curvo'));

//.slice para cortar
console.log(producto.slice(0,10));

//alternativa a slice
//la diferencia es que lo modifica a los valores correctos
// (10,9) es un valor incorrecto y lo modifica al correcto
console.log(producto.substring(0,10));

const usuario = "Adrian";

// para solamente mostrar la primera letra como esta en google (A)
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));