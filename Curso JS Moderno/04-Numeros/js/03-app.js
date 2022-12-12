const numero = 30;
 const numero1 = 20;


let resultado;

//PI
resultado = Math.PI;

//Redondear
resultado = Math.round(2.8);
resultado = Math.round(2.2);
resultado = Math.round(2.6);


// redondear para arriba
resultado = Math.ceil(2.1);

// redondear para abajo
resultado = Math.floor(2.1);


// raiz cuadrada
resultado = Math.sqrt(144);

//absoluto
resultado = Math.abs(-220);

//Potencia
resultado = Math.pow(2,9);

//Minimo
 resultado = Math.min(9,4,42,5,76,7);

//Maximo
resultado = Math.max(242,4,24,2,42,52,5,2);

// random
// resultado = Math.random()* 20;
 // resultado random de numero del 0 al 30
resultado = Math.ceil(Math.random()*30);


console.log(resultado);