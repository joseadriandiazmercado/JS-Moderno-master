

const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if(efectivo > totalPagar || credito > totalPagar || disponible > totalPagar){ // "||" or, lo que hace es que se realice una condicion o se realice la otra
console.log(`Si puedes pagar`);
}
else{
    console.log(`Fondo insuficientes`);
}