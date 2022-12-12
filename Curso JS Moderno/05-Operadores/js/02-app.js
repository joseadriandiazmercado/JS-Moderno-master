const numero = 20;
const numero1 = "20";
const numero2 = 30;


// numeros iguales
console.log(numero == numero1);

// comparador extricto
// este operador tambien se fija en el tipo de dato
// ===
console.log(numero === numero1);
console.log(numero ===parseInt(numero1)); // esto es para convertir el valor
console.log(typeof numero);
console.log(typeof numero1);


//diferente
const password1 = "admin"
const password2 = "Admin"

console.log(password1 != password2);
console.log(numero != numero1);
console.log(numero !== parseInt(numero1));