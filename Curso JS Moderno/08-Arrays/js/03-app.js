const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];


console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);


// En cuestion del carrito, puede tener 0, 1 "O" 100 productos
// cuanto mide el arreglo

console.log(meses.length);

for(let i = 0; i < meses.length; i++){

    console.log(meses[i]); // meses en la pocicion de "i" 

}